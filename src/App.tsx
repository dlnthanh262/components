import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, BlogReviewCardPage } from "@/pages";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
