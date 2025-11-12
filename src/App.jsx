import "./styles.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ListingPage from "./pages/ListingPage";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import InsideArticlePage from "./pages/InsideArticlePage";
export default function App() {
  return (
    <>
      <Navbar />
      <div className="page">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<ListingPage />}></Route>
          <Route path="/articles/:articleId" element={<InsideArticlePage />} />
          {/* <Route path="/article/:id" element={<ArticlePage />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}
