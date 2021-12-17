import Sidebar from "../../components/organisms/sidebar";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import Table from "../../components/organisms/table";
import Button from "../../components/atoms/button";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { getCategory } from "../../api/category";
import Spinner from "../../components/atoms/spinners";

export default function Category() {
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  function handleAdd() {
    navigate("/category/form");
  }

  const { data, isError, isLoading, isSuccess } = useQuery(
    "category",
    getCategory,
    {
      refetchInterval: 1000,
    }
  );

  const columns: any = useMemo(
    () => [
      {
        Header: "Category",
        accessor: "name",
      },
      {
        Header: "Action",
        id: "edit",
        Cell: ({ row }: any) => (
          <>
            <Button
              type="button"
              btnColor="danger"
              size="sm"
              onClick={() => console.log(row.original._id)}
            >
              <i className="fas fa-trash"></i>
            </Button>
            <span className="ml-3">
              <Button
                type="button"
                btnColor="primary"
                size="sm"
                onClick={() => console.log(row.original._id)}
              >
                <i className="fas fa-edit"></i>
              </Button>
            </span>
          </>
        ),
      },
    ],
    []
  );

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
                    {isError && <h3>Something Wrong</h3>}
                    {isLoading && (
                      <div className="text-center">
                        <Spinner color="success" size="lg" />
                      </div>
                    )}
                    {isSuccess && <Table data={data} columns={columns} />}
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
