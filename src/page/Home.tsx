import Footer from "../components/organisms/footer";
import MainContent from "../components/organisms/main-content";
import Navbar from "../components/organisms/navbar";
import Sidebar from "../components/organisms/sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content" className="content">
          <MainContent />
          <Footer />
        </div>
      </div>
    </>
  );
}
