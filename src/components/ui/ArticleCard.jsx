import "./ArticleCard.css";
import { formatDate } from "../../utils/utils";
import { Link } from "react-router-dom";
const ArticleCard = ({
  id,
  title,
  description,
  meta,
  tags,
  images,
  specialClass,
  specialMediumClass,
  specialSuggestClass,
  hideDescription,
  spanVal,
}) => {
  let spanClass = "";
  switch (spanVal) {
    case 1:
      spanClass = "card_span_1";
      break;
    case 2:
      spanClass = "card_span_2";
      break;
    case 3:
      spanClass = "card_span_3";
      break;
    case 4:
      spanClass = "card_span_4";
      break;
    default:
      spanClass = "";
      break;
  }

  return (
    <Link className={`article_link ${spanClass}`} to={`/articles/${id}`}>
      <div
        className={`article_card ${
          specialMediumClass ? "article_card_medium" : ""
        } ${specialClass ? "article_card_hori" : ""} 
        ${specialSuggestClass ? "article_suggest_layout" : ""} 
      `}
      >
        <div className="article_card_image_cover">
          <img
            className="article_card_img"
            // src="https://images.unsplash.com/photo-1606788075761-1f92adf0b8f3"
            src={images[0]}
            alt="Vir Das performing"
          />
        </div>
        <div className="article_card_content">
          <div className="card_tag">{tags[0]}</div>
          <h3 className="card_title">{title}</h3>
          <p className={`card_desc ${hideDescription ? "hide_desc" : ""}`}>
            {description}
          </p>
          <p className="card_meta">{formatDate(meta.createdAt)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
