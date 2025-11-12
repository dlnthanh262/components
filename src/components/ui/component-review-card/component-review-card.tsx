import { Link } from "react-router-dom";
import { cn } from "@/utils";

export type ComponentReviewCardProps = {
  name: string;
  description: string;
  image: string;
  path: string;
};

export const ComponentReviewCard = ({
  name,
  description,
  image,
  path,
}: ComponentReviewCardProps) => {
  const imagePath = `images${path}/${image}`;
  const linkClassName = cn(
    "group p-3 bg-white rounded-lg w-64",
    "transition-transform duration-300 ease-in-out",
    "hover:bg-gray-100"
  );
  return (
    <Link to={path} className={linkClassName}>
      <div className="flex flex-col gap-4">
        <div className="relative overflow-hidden rounded-[10px]">
          <img
            src={imagePath}
            alt={`${name}-${image}`}
            className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-200"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h6 className="text-slate-800 text-xl font-semibold">{name}</h6>
          <p className="text-slate-600 leading-normal font-light line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
