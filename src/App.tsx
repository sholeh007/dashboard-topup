import "./app.css";
import "react-toastify/dist/ReactToastify.min.css";
import Home from "./page/Home";
import Category from "./page/Category/index";
import FormCategory from "./page/Category/Form";
import NotFound from "./404";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/form" element={<FormCategory />}>
          <Route path=":categoryId" element={<FormCategory />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
}

export default App;
