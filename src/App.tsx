import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, BlogReviewCardPage } from "@/pages";
import "./App.css";

const basename = import.meta.env.VITE_ROUTER_BASENAME || "/";

function App() {
  return (
    <BrowserRouter basename={basename}>
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
