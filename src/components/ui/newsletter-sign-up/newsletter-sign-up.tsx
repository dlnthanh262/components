import { useRef, useState, type HTMLAttributes } from "react";
import { cn, getImagePath } from "@/utils";
import "./newsletter-sign-up.css";

export type NewsletterSignUpFormProps = {
  title: string;
  description: string;
  iconPath: string;
  text1: string;
  text2: string;
  text3: string;
  inputLabel: string;
  inputErrorMessage: string;
  inputPlaceholder: string;
  buttonText: string;
  imageDesktop: string;
  imageTablet: string;
  imageMobile: string;
};

export type NewsletterSignUpDialogProps = {
  title: string;
  description: string;
  iconPath: string;
  buttonText: string;
};

export type NewsletterSignUpProps = {
  path: string;
  form: NewsletterSignUpFormProps;
  dialog: NewsletterSignUpDialogProps;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const NewslettersSignUpCheck = ({
  checkText,
  checkIconPath,
}: {
  checkText: string;
  checkIconPath: string;
}) => (
  <div className="flex items-start gap-4">
    <img src={checkIconPath} alt="Check Icon" className="w-auto h-auto" />
    <span className="newsletter-text-preset-2-regular">{checkText}</span>
  </div>
);

const formatDialogText = (text: string, email: string) => {
  if (text.indexOf("<b>") === -1 || text.indexOf("</b>") === -1) {
    return text;
  }

  const startPosition: number = text.indexOf("<b>");
  const endPosition: number = text.indexOf("</b>");

  return text.slice(0, startPosition + 3) + email + text.slice(endPosition);
};

export const NewsletterSignUp = ({
  path,
  form,
  dialog,
  className,
  ...props
}: NewsletterSignUpProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const formIconPath = getImagePath(path, form.iconPath);
  const dialogIconPath = getImagePath(path, dialog.iconPath);

  const handleTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsInputValid(event.target.value.length > 0);
    setShowError(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputRef.current) return;
    if (!inputRef.current.checkValidity()) {
      setShowError(true);
      setShowDialog(false);
      return;
    }
    setShowError(false);
    setShowDialog(true);
    setEmail(inputRef.current.value);
  };

  return (
    <div className="roboto w-screen h-auto m-auto md:h-screen md:bg-(--newsletter-blue-700) md:flex justify-center items-center">
      {/* Form */}
      <div
        {...props}
        className={cn(
          "bg-white w-full h-auto m-auto md:w-auto flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 justify-center",
          className,
          "newsletter-sign-up-wrapper",
          showDialog && "hidden"
        )}
      >
        <picture className="flex items-center justify-center">
          <source
            srcSet={getImagePath(path, form.imageMobile)}
            media="(max-width: 767px)"
          />
          <source
            srcSet={getImagePath(path, form.imageTablet)}
            media="(min-width: 768px) and (max-width: 1023px)"
          />
          <source
            srcSet={getImagePath(path, form.imageDesktop)}
            media="(min-width: 1024px)"
          />
          <img
            src={getImagePath(path, form.imageDesktop)}
            className="w-full h-auto"
            alt="Newsletter Sign Up Image"
          />
        </picture>
        <div className="abc flex flex-col gap-6 items-start w-[327px] mb-8 h-auto md:w-full lg:w-[376px] m-auto lg:mb-auto">
          <div className="flex flex-col gap-6 justify-start w-full">
            <span className="newsletter-text-preset-1">{form.title}</span>
            <span className="newsletter-text-preset-2-regular">
              {form.description}
            </span>
            <div className="flex flex-col items-start gap-2">
              <NewslettersSignUpCheck
                checkText={form.text1}
                checkIconPath={formIconPath}
              />
              <NewslettersSignUpCheck
                checkText={form.text2}
                checkIconPath={formIconPath}
              />
              <NewslettersSignUpCheck
                checkText={form.text3}
                checkIconPath={formIconPath}
              />
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-6 justify-start w-[327px] md:w-full"
          >
            <div className="flex flex-col justify-start gap-2">
              <div className="flex flex-row items-start justify-between">
                <label
                  htmlFor="newsletter-sign-up-email"
                  className="newsletter-text-preset-3"
                >
                  {" "}
                  {form.inputLabel}
                </label>
                <span
                  className={cn(
                    "newsletter-text-preset-3 newsletter-text-red",
                    showError ? "inline-block" : "hidden"
                  )}
                >
                  {form.inputErrorMessage}
                </span>
              </div>
              <div
                className={cn(
                  "outline-1 outline-(--newsletter-grey) rounded-lg px-6 py-4 focus-within:outline-(--newsletter-blue-800)",
                  showError && "outline-(--newsletter-red) bg-[#FFE7E6]"
                )}
              >
                <input
                  ref={inputRef}
                  id="newsletter-sign-up-email"
                  type="email"
                  name="newsletter-sign-up-email"
                  placeholder={form.inputPlaceholder}
                  required
                  className={cn(
                    "w-full focus:outline-none placeholder:newsletter-text-preset-2-regular placeholder:newsletter-text-grey newsletter-text-preset-2-regular",
                    showError && "newsletter-text-red"
                  )}
                  onChange={handleTyping}
                  onFocus={handleTyping}
                />
              </div>
            </div>
            <button
              type="submit"
              className={cn(
                "newsletter-text-preset-2-bold text-white px-10 py-4 newsletter-bg-blue-800 rounded-lg select-none",
                isInputValid && !showError
                  ? "lg:bg-[linear-gradient(90deg,#ff6a3a,#ff527b)]"
                  : "lg:bg-(--newsletter-blue-800)"
              )}
            >
              {form.buttonText}
            </button>
          </form>
        </div>
      </div>

      {/* Success Dialog */}
      <div
        className={cn(
          "flex flex-col items-start justify-center px-6 md:bg-white md:rounded-[36px] md:p-16 md:gap-8 md:w-[504px]",
          showDialog || "hidden"
        )}
      >
        <div className="flex flex-col items-start justify-center gap-8 newsletter-text-800 h-[80vh] md:h-auto">
          <img
            src={dialogIconPath}
            alt="Success Dialog Icon"
            className="w-16 h-16"
          />
          <span className="newsletter-text-preset-1">{dialog.title}</span>
          <span
            className="newsletter-text-preset-2"
            dangerouslySetInnerHTML={{
              __html: formatDialogText(dialog.description, email),
            }}
          ></span>
        </div>
        <button
          type="button"
          className={cn(
            "newsletter-text-preset-2-bold text-white px-10 py-4 newsletter-bg-blue-800 rounded-lg select-none w-full"
          )}
        >
          {dialog.buttonText}
        </button>
      </div>
    </div>
  );
};
