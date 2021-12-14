import Sidebar from "../components/organisms/sidebar";
import Navbar from "../components/organisms/navbar";
import Footer from "../components/organisms/footer";

export default function Category() {
  return (
    <div id="wrapper">
      <Sidebar active="category" />
      <div id="content-wrapper" className="d-flex flex-column content">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Category</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
