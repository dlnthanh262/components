import type { ComponentData } from "./component-data.types";

export const blogReviewCardData = {
  name: "Blog Review Card",
  image: "screenshot.png",
  description:
    "A responsive card component to showcase reviews for blogs or stories",
  path: "/blog-review-card",
  uiProps: [
    {
      tag: "Learning",
      title: "HTML& CSS foundations",
      description:
        "These languages are the backbone of every website, defining structure, content, and presentation.",
      image: "illustration-article.svg",
      author: {
        name: "Greg Hooper",
        avatar: "image-avatar.webp",
      },
      publishedDate: "21 Dec 2023",
    },
  ],
} as ComponentData;

export const componentDataList = [blogReviewCardData];
