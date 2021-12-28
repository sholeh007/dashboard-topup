import Sidebar from "../../components/organisms/sidebar";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import Table from "../../components/organisms/table";
import Button from "../../components/atoms/button";
import Spinner from "../../components/atoms/spinners";
import { useNavigate, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { delCategory, getCategory } from "../../api/category";
import { toast } from "react-toastify";

export default function Category() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const options: any = {
    autoClose: 3000,
    theme: "colored",
    toastId: "1",
  };

  if (state?.success) {
    toast.success(`Success ${state.message} category`, options);
  }

  function handleAdd() {
    navigate("/category/form");
  }

  async function handleDelete(id: string) {
    const conf = confirm("Are you sure");

    if (!conf) return;
    await delCategory(id);
    toast.success("delete success", options);
  }

  function handleUpdate(id: string) {
    navigate(`/category/form/${id}`);
  }

  const { data, isError, isLoading, isSuccess } = useQuery("category", () =>
    getCategory(10, 0)
  );

  const columns: any = useMemo(
    () => [
      {
        Header: "No.",
        accessor: (_: any, i: number) => i + 1,
      },
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
              onClick={() => handleDelete(row.original._id)}
            >
              <i className="fas fa-trash"></i>
            </Button>
            <span className="ml-3">
              <Button
                type="button"
                btnColor="primary"
                size="sm"
                onClick={() => handleUpdate(row.original._id)}
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
            <div className="d-sm-flex mb-4">
              <h1 className="h3 mb-0 text-gray-800">Category</h1>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="mb-4">
                  <Button type="button" btnColor="primary" onClick={handleAdd}>
                    Add
                  </Button>
                </div>
                {isError && <h3>Something Wrong</h3>}
                {isLoading && (
                  <div className="text-center">
                    <Spinner color="success" size="lg" />
                  </div>
                )}
                {isSuccess && (
                  <>
                    <Table data={data} columns={columns} />
                    <div className="mt-3">
                      <nav>
                        <ul className="pagination justify-content-end">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>
                          <li className="page-item disabled">
                            <span className="page-link">Prev</span>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <span className="page-link">Next</span>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
