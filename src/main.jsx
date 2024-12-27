import { createRoot } from "react-dom/client";
import "./index.css";
import Cards from "./App.jsx";
import Navbar from "./components/Navbar";

createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <Cards />
  </>
);
