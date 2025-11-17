import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: unknown[]) => twMerge(clsx(inputs));

export const getImagePath = (basePath: string, imageName: string) => {
  if (!basePath.startsWith("/")) {
    basePath = `/${basePath}`;
  }
  if (basePath.endsWith("/")) {
    basePath = basePath.slice(0, -1);
  }
  if (!imageName.startsWith("/")) {
    imageName = `/${basePath}`;
  }
  if (imageName.endsWith("/")) {
    imageName = basePath.slice(0, -1);
  }
  return `images/${basePath}/${imageName}`;
};
