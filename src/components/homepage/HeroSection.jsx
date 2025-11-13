import "./styles/HeroSection.css";
import MountainImage from "../../assets/mountain.jpg";
import { GetSinglePost } from "../../api/api";
import useHttp from "../../customhook/useHttp";
import Loader from "../ui/Loader";
export default function HeroSection() {
  const {
    loading,
    data: singleArticle,
    error,
  } = useHttp(() => GetSinglePost(168));
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!singleArticle && singleArticle?.length === 0) {
    return <p>No articles available.</p>;
  }
  return (
    <div className="hero_wrapper">
      <div className="bg_img"></div>
      <section className="hero_section">
        <div className="hero_image">
          <img src={singleArticle?.images[1]} alt="Vir Das performing" />
        </div>
        <div className="hero_overlay">
          <span className="hero_tag">POV</span>
          <h1 className="hero_title">{singleArticle?.title}</h1>
          <p className="hero_meta">
            <span>November 1, 11:33 AM</span>
          </p>
        </div>
      </section>
      <div className="mini_card_holder">
        <div className="mini_card">
          <div className="mini_card_content">
            <h3>The UK's best outdoor restaurant and Terraces</h3>
            <p>
              <b>By : jolly</b>
            </p>
          </div>
          <div className="mini_card_image">
            <img src={MountainImage} alt="mini_img" />
          </div>
        </div>

        <div className="mini_card">
          <div className="mini_card_content">
            <h3>The UK's best outdoor restaurant and Terraces</h3>
            <p>By : jolly</p>
          </div>
          <div className="mini_card_image">
            <img src={MountainImage} alt="mini_img" />
          </div>
        </div>
      </div>
    </div>
  );
}
