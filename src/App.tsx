import "./app.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Category from "./page/Category";
import NotFound from "./404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
