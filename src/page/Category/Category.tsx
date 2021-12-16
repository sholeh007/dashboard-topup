import Sidebar from "../../components/organisms/sidebar";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import Table from "../../components/organisms/table";
import Button from "../../components/atoms/button";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  function handleAdd() {
    navigate("/category/form");
  }

  return (
    <div id="wrapper">
      <Sidebar active="/category" />
      <div id="content-wrapper" className="d-flex flex-column content">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
            {pathname === "/category" && (
              <>
                <div className="d-sm-flex mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Category</h1>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="mb-4">
                      <Button
                        type="button"
                        btnColor="primary"
                        onClick={handleAdd}
                      >
                        Add
                      </Button>
                    </div>
                    <Table />
                  </div>
                </div>
              </>
            )}
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
