import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, BlogReviewCardPage, NewslettersSignUpPage } from "@/pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/components">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/blog-review-card"
          element={<BlogReviewCardPage />}
        ></Route>
        <Route
          path="/newsletter-sign-up"
          element={<NewslettersSignUpPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
