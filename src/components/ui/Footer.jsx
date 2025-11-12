import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="footer_top_inner">
          <div className="footer_brand">
            <p className="footer_brand_name">The Economic Times</p>
            <p className="footer_brand_text">
              "Lorem ipsum dolor sit amet consectetur. Proin quis et eget
              aliquam amet."
            </p>
          </div>
          <div className="footer_brand">
            <p className="footer_brand_name">INDIANtelevision</p>
            <p className="footer_brand_text">
              "Lorem ipsum dolor sit amet consectetur. Proin quis et eget
              aliquam amet."
            </p>
          </div>
          <div className="footer_brand">
            <p className="footer_brand_name">
              World Association of News Publishers
            </p>
            <p className="footer_brand_text">
              "Lorem ipsum dolor sit amet consectetur. Proin quis et eget
              aliquam amet."
            </p>
          </div>
          <div className="footer_brand">
            <p className="footer_brand_name">Telangana Today</p>
            <p className="footer_brand_text">
              "Lorem ipsum dolor sit amet consectetur. Proin quis et eget
              aliquam amet."
            </p>
          </div>
          <div className="footer_brand">
            <p className="footer_brand_name">BRAND EQUITY</p>
            <p className="footer_brand_text">
              "Lorem ipsum dolor sit amet consectetur. Proin quis et eget
              aliquam amet."
            </p>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="footer_logo_section">
          <h1 className="footer_logo">Arré</h1>
          <div className="footer_socials">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>

        <nav className="footer_nav">
          <a href="#">HOME</a>
          <a href="#">STUDIO</a>
          <a href="#">VOICE</a>
          <a href="#">AWARDS</a>
          <a href="#">ABOUT</a>
        </nav>

        <div className="footer_links">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer_copy">
          U Digital Content © 2024 - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
