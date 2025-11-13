import { cn } from "@/utils";
import "./blog-review-card.css";
import { siteConfig } from "@/config/site-config";
import type { Author } from "@/types/blog-review-card";
import type { HTMLAttributes } from "react";

export type BlogReviewCardProps = {
  path: string;
  tag: "Learning";
  title: string;
  description: string;
  image: string;
  author: Author;
  publishedDate: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const BlogReviewCard = ({
  path,
  tag,
  title,
  description,
  image,
  author,
  publishedDate,
  className,
  ...props
}: BlogReviewCardProps) => {
  const cardWrapperClassName = cn(
    "bg-white mx-auto w-[327px] md:w-[384px] rounded-[20px] p-6",
    "border border-(--card-gray-950) shadow-[8px_8px_0_0_#000]",
    "flex flex-col items-start gap-6",
    className
  );

  return (
    <div className="figtree w-screen h-screen flex justify-center items-center card-bg-yellow">
      <div className={cardWrapperClassName} {...props}>
        <img
          src={`${siteConfig.imageBasePath}${path}${image}`}
          alt="blog-review-card-image"
          className="w-full h-auto rounded-[10px]"
        />
        <div className="flex flex-col gap-3 items-start">
          <div className="card-bg-yellow card-text-preset-3-bold md:text-sm card-text-gray-950 px-3 py-1 rounded">
            {tag}
          </div>
          <div className="card-text-preset-3 md:text-sm card-text-gray-950">
            Published {publishedDate}
          </div>
          <a
            href="#"
            className="card-text-preset-1 md:text-2xl card-text-gray-950 hover:text-(--card-yellow)"
          >
            {title}
          </a>
          <div className="card-text-preset-2 md:text-base card-text-gray-500">
            {description}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img
            src={`${siteConfig.imageBasePath}${path}${author.avatar}`}
            alt={author.name}
            className="w-8 h-8"
          />
          <span className="card-text-preset-3-bold text-sm card-text-gray-950">
            {author.name}
          </span>
        </div>
      </div>
    </div>
  );
};
