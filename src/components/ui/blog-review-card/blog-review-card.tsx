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
    <div className="card-bg-yellow">{tag}</div>
    <div className="">Published {publishedDate}</div>
    <div className="font-bold text-2xl">{title}</div>
    <div className="">{description}</div>
    <div className="flex items-center">
      <img
        src={`./public/images/blog-review-card/${author.avatar}`}
        alt={author.name}
      />
      <span>{author.name}</span>
    </div>
  </div>
);
