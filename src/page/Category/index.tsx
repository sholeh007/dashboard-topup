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

  if (state === "success") {
    toast.success("Success add category", options);
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

  const { data, isError, isLoading, isSuccess } = useQuery(
    "category",
    getCategory
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
              onClick={() => handleDelete(row.original._id)}
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
            <div className="d-sm-flex mb-4">
              <h1 className="h3 mb-0 text-gray-800">Category</h1>
            </div>
            <div className="row">
              <div className="col-sm-8">
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
                {isSuccess && <Table data={data} columns={columns} />}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
