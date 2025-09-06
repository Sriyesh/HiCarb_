import { Routes, Route } from "react-router-dom";
import "./index.css"; // ensure this imports your Tailwind/global CSS
import HicarbManufacturing from "./manufacturing/src/App-manufacturing.jsx";
import HeatTreatment from "./heat-treatment/src/App.jsx"; // if you also want a second one
import Home from "./Home/home";
/* ---------- Main App ---------- */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hicarbManufacturing" element={<HicarbManufacturing />} />
      <Route path="/heatTreatment" element={<HeatTreatment />} />
    </Routes>
  );
}
