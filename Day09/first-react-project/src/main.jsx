import { createRoot } from "react-dom/client";
import MyComponent from "./app";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyComponent />
  </BrowserRouter>,
);
