import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ListComponent from "./components/ListComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ListComponent />
  </StrictMode>,
);
