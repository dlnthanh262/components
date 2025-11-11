import type { Author } from "../../../types/author";

export type BlogReviewCardProps = {
  tag: "learning" | "lifestyle" | "news";
  title: string;
  description: string;
  image: string;
  author: Author;
  publishedDate: string;
};

export const BlogReviewCard = ({
  tag,
  title,
  description,
  image,
  author,
  publishedDate,
}: BlogReviewCardProps) => (
  <div className="container mx-auto bg-white rounded">
    <img src={`./public/images/blog-review-card/${image}`} alt="" />
    <div className="card-bg-yellow"></div>
  </div>
);
