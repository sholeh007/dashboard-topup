import Footer from "../components/organisms/footer";
import Navbar from "../components/organisms/navbar";
import Sidebar from "../components/organisms/sidebar";

export default function Category() {
  return (
    <>
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content" className="content">
          <h1>ini Category</h1>
          <Footer />
        </div>
      </div>
    </>
  );
}
