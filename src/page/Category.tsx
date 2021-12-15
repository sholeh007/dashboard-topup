import Sidebar from "../components/organisms/sidebar";
import Navbar from "../components/organisms/navbar";
import Footer from "../components/organisms/footer";
import Table from "../components/organisms/table";

export default function Category() {
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
                <Table />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
