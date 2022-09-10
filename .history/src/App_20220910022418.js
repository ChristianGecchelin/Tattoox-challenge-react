import { Gallery } from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Gallery />
      </Routes>
    </div>
  );
}

export default App;
