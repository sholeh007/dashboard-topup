import Footer from "./components/organisms/footer";
import MainContent from "./components/organisms/main-content";
import Navbar from "./components/organisms/navbar";
import Sidebar from "./components/organisms/sidebar";
import styles from "./app.module.css";

function App() {
  return (
    <>
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content" className={styles.content}>
          <MainContent />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
