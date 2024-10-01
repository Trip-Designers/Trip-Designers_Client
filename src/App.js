import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planning from "./pages/Planning";
import Itinerary from "./pages/Itinerary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planning/:id" element={<Planning />} />
      <Route path="/itinerary/:id" element={<Itinerary />} />
    </Routes>
  );
}

export default App;
