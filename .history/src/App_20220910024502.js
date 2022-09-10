import { Routes, Route } from "react-router-dom";
import { Gallery } from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/character-page/:page" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
