import "./App.css";
import { BlogReviewCard, type BlogReviewCardProps } from "./components/ui";
import { componentData } from "@/config";

function App() {
  const blogReviewCardProps =
    componentData.blogReviewCard as BlogReviewCardProps;
  return <BlogReviewCard {...blogReviewCardProps} />;
}

export default App;
