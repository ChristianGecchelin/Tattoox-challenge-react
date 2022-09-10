import { Routes, Route } from "react-router-dom";
import { Gallery } from "./pages/gallery/Gallery";
import { Home } from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character-page/:page" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
