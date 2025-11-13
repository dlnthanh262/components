import { componentDataList } from "@/config";
import { ComponentReviewCard } from "@/components/ui";
import type { ComponentData } from "@/config";
import type { ComponentReviewCardProps } from "@/components/ui";

const getComponentReviewCardProps = (componentData: ComponentData) =>
  ({
    name: componentData.name,
    description: componentData.description,
    screenshot: componentData.screenshot,
    path: componentData.path,
  } as ComponentReviewCardProps);

export const HomePage = () => (
  <div className="bg-gray-200 w-screen h-screen flex flex-col md:flex-row items-center justify-center gap-8">
    {componentDataList.map((componentData) => {
      const componentReviewCardProps =
        getComponentReviewCardProps(componentData);
      return (
        <ComponentReviewCard
          key={componentReviewCardProps.name}
          {...componentReviewCardProps}
        ></ComponentReviewCard>
      );
    })}
  </div>
);
