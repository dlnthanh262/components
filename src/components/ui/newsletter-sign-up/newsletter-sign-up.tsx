import { cn, getImagePath } from "@/utils";
import "./newsletter-sign-up.css";
import type { HTMLAttributes } from "react";

export type NewsletterSignUpFormProps = {
  title: string;
  description: string;
  check1: string;
  check2: string;
  check3: string;
  inputLabel: string;
  inputPlaceholder: string;
  buttonText: string;
  imageDesktop: string;
  imageTablet: string;
  imageMobile: string;
};

export type NewsletterSignUpDialogProps = {
  title: string;
  description: string;
  buttonText: string;
};

export type NewsletterSignUpProps = {
  path: string;
  form: NewsletterSignUpFormProps;
  dialog: NewsletterSignUpDialogProps;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const NewsletterSignUp = ({
  path,
  form,
  dialog,
  className,
  ...props
}: NewsletterSignUpProps) => {
  const newsletterWrapperClassName = cn(
    "bg-white w-full h-auto md:w-auto flex flex-col lg:flex-row lg:flex-row-reverse md:p-10",
    className
  );
  return (
    <div className="roboto w-screen h-auto md:h-screen md:bg-(--newsletter-blue-700) md:flex justify-center items-center">
      <div className={newsletterWrapperClassName}>
        <picture>
          <source
            srcSet={getImagePath(path, form.imageMobile)}
            media="(max-width: 639px)"
          />
          <source
            srcSet={getImagePath(path, form.imageTablet)}
            media="(min-width: 640px) and (max-width: 1023px)"
          />
          <source
            srcSet={getImagePath(path, form.imageDesktop)}
            media="(min-width: 1024px)"
          />
          <img
            src={getImagePath(path, form.imageDesktop)}
            className="w-auto h-auto"
            alt="Newsletter Sign Up Image"
          />
        </picture>
      </div>
    </div>
  );
};
