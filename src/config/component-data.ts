import type { NewsletterSignUpFormProps } from "@/components/ui";
import type { ComponentData } from "./component-data.types";

export const newsletterSignUpData = {
  name: "Newsletter Sign Up",
  screenshot: "/screenshot.jpg",
  description: "A responsive Newsletter sign-up form with success message",
  path: "/newsletter-sign-up",
  uiProps: [
    {
      path: "/newsletter-sign-up",
      form: {
        title: "Stay updated!",
        description:
          "Join 60,000+ product managers receiving monthly updates on:",
        check1: "Product discovery and building what matters",
        check2: "Measuring to ensure updates are a success",
        check3: "And much more!",
        imageDesktop: "/illustration-sign-up-desktop.svg",
        imageTablet: "/illustration-sign-up-tablet.svg",
        imageMobile: "/illustration-sign-up-mobile.svg",
        inputLabel: "Email address",
        inputPlaceholder: "email@company.com",
        buttonText: "Subscribe to monthly newsletter",
      } as NewsletterSignUpFormProps,
      dialog: {
        title: "Thanks for subscribing!",
        description:
          "A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open it and click the button inside to confirm your subscription.",
        buttonText: "Dismiss message",
      } as NewsletterSignUpFormProps,
    },
  ],
} as ComponentData;

export const blogReviewCardData = {
  name: "Blog Review Card",
  screenshot: "/screenshot.png",
  description: "A responsive card component to showcase reviews for blogs",
  path: "/blog-review-card",
  uiProps: [
    {
      path: "/blog-review-card",
      tag: "Learning",
      title: "HTML& CSS foundations",
      description:
        "These languages are the backbone of every website, defining structure, content, and presentation.",
      image: "/illustration-article.svg",
      author: {
        name: "Greg Hooper",
        avatar: "/image-avatar.webp",
      },
      publishedDate: "21 Dec 2023",
    },
  ],
} as ComponentData;

export const componentDataList = [blogReviewCardData, newsletterSignUpData];
