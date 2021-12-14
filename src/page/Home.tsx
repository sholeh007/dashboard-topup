import ContentHome from "../components/organisms/content-home";
import Footer from "../components/organisms/footer";
import Navbar from "../components/organisms/navbar";
import Sidebar from "../components/organisms/sidebar";

export default function Home() {
  return (
    <div id="wrapper">
      <Sidebar active="/" />
      <div id="content-wrapper" className="d-flex flex-column content">
        <div id="content">
          <Navbar />
          <ContentHome />
        </div>
        <Footer />
      </div>
    </div>
  );
}
