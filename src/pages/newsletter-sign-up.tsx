import { NewsletterSignUp } from "@/components/ui";
import { newsletterSignUpData } from "@/config";
import type { NewsletterSignUpProps } from "@/components/ui";

export const NewslettersSignUpPage = () => {
  const newsletterSignUpProps = newsletterSignUpData
    .uiProps[0] as unknown as NewsletterSignUpProps;
  return <NewsletterSignUp {...newsletterSignUpProps} />;
};
