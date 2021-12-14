import "./app.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import NotFound from "./404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
