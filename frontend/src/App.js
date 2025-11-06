import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watches from "./pages/Watches";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watches" element={<Watches />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
