import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./header.css";
import "./footer.css";
import Header from "./components/headerComponent.jsx";

import Footer from "./components/Footer.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />

    <Footer />
  </StrictMode>
);
