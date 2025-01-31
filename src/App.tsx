import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}
