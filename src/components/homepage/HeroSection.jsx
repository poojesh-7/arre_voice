import "./styles/HeroSection.css";
import MountainImage from "../../assets/mountain.jpg";
export default function HeroSection() {
  return (
    <div className="hero_wrapper">
      <div className="bg_img"></div>
      <section className="hero_section">
        <div className="hero_image">
          <img src={MountainImage} alt="Vir Das performing" />
        </div>
        <div className="hero_overlay">
          <span className="hero_tag">POV</span>
          <h1 className="hero_title">
            The Like Kangana, Vir Das should be allowed the right to believe in
            the India he sees.
          </h1>
          <p className="hero_meta">
            <span>November 1, 11:33 AM</span> by <strong>DANNY GEORGE</strong>
          </p>
        </div>
      </section>
      <div className="mini_card_holder">
        <div className="mini_card">
          <div className="mini_card_content">
            <h3>The UK's best outdoor restaurant and Terraces</h3>
            <p>By : jolly</p>
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
