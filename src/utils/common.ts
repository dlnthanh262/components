import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: unknown[]) => twMerge(clsx(inputs));

export const getImagePath = (basePath: string, imageName: string) => {
  return `images/${basePath}/${imageName}`;
};
