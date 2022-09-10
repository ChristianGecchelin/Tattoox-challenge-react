import { Routes, Route } from "react-router-dom";
import { Gallery } from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
