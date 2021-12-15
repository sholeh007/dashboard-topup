import Sidebar from "../components/organisms/sidebar";
import Navbar from "../components/organisms/navbar";
import Footer from "../components/organisms/footer";
import Table from "../components/organisms/table";
import Modal from "../components/molecules/modals";
import Button from "../components/atoms/button";
import ModalFooter from "../components/molecules/modals/modal-footer";

export default function Category() {
  const handleForm = (e: any) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <div id="wrapper">
      <Sidebar active="category" />
      <div id="content-wrapper" className="d-flex flex-column content">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
            <div className="d-sm-flex mb-4">
              <h1 className="h3 mb-0 text-gray-800">Category</h1>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-4">
                  <Button
                    type="button"
                    btncolor="primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Add
                  </Button>
                </div>
                <Table />
                <Modal id="exampleModal" title="Add Category">
                  <form onSubmit={handleForm}>
                    <div className="form-group">
                      <label>Category Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <ModalFooter />
                  </form>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
