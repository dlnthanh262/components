import "./App.css";
import { BlogReviewCard, type BlogReviewCardProps } from "./components/ui";
import { siteConfig } from "./config/site-config";

function App() {
  const blogReviewCardProps = siteConfig.blogReviewCard as BlogReviewCardProps;
  return (
    <div className="card-bg-yel">
      <BlogReviewCard {...blogReviewCardProps} />
    </div>
  );
}

export default App;
