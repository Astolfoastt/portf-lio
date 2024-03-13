import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import SmoothScrollToTop from "./components/scrollPages/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <SmoothScrollToTop />
    <App />
  </BrowserRouter>
);
