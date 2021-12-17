import "./app.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Category from "./page/Category";
import FormCategory from "./page/Category/Form";
import NotFound from "./404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />}>
        <Route path="form" element={<FormCategory />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
