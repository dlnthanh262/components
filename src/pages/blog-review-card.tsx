import { BlogReviewCard } from "@/components/ui/";
import { blogReviewCardData } from "@/config/component-data";
import type { BlogReviewCardProps } from "../components/ui/blog-review-card/blog-review-card";

export const BlogReviewCardPage = () => {
  const blogReviewCardProps = blogReviewCardData
    .uiProps[0] as unknown as BlogReviewCardProps;
  return <BlogReviewCard {...blogReviewCardProps} />;
};
