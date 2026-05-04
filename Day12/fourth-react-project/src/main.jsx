import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Launcher from "./Launcher.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Launcher />
  </BrowserRouter>
);
