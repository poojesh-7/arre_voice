import "./InsideArticlePage.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { GetPosts, GetSinglePost } from "../api/api";
import useHttp from "../customhook/useHttp";
import MountainImage from "../assets/mountain.jpg";
import ArticleCard from "../components/ui/ArticleCard";
import { formatDate } from "../utils/utils";
import Loader from "../components/ui/Loader";
const InsideArticlePage = () => {
  const { articleId } = useParams();
  const {
    loading,
    data: singleArticle,
    error,
  } = useHttp(() => GetSinglePost(articleId));
  const {
    loading: subLoading,
    data: suggestedArticles,
    error: subError,
  } = useHttp(() => GetPosts("groceries", 3));

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!singleArticle) {
    return <p>No articles available.</p>;
  }
  if (subLoading) {
    return <Loader />;
  }
  if (subError) {
    return <p>Error: {error}</p>;
  }

  if (!suggestedArticles || suggestedArticles?.length === 0) {
    return <p>No articles available.</p>;
  }
  return (
    <div className="single_article">
      <h1 className="mobile_title">{singleArticle?.title}</h1>
      <p className="mobile_description">{singleArticle?.description}</p>
      <div className="article_img">
        <img src={singleArticle?.images[0]} alt="main image" />
        <div className="desktop_title_cover">
          <h1 className="desktop_title">{singleArticle?.title}</h1>
        </div>
      </div>
      <p className="desktop_description">{singleArticle?.description}</p>
      <div className="full_page_content">
        <div className="meta_data_view">
          <div className="top_section">
            <div className="posted_meta_content">
              <div className="tag_view">
                <p>{singleArticle?.tags[0]}</p>
              </div>
              <p>{formatDate(singleArticle?.meta.createdAt)}</p>
              <p>3 min read</p>
            </div>
            <div className="user_meta_content">
              <div className="user_image_name">
                <img
                  src={MountainImage}
                  className="user_img"
                  alt="user image"
                />
                <h3>By John</h3>
              </div>
              <div className="share_on">
                <h3>Share on</h3>
                <div className="social_media_icons">
                  <div className="social_icon_cover">
                    <FaFacebookF size={20} />
                  </div>
                  <div className="social_icon_cover">
                    <FaInstagram size={20} />
                  </div>
                  <div className="social_icon_cover">
                    <FaTwitter size={20} />
                  </div>
                  <div className="social_icon_cover">
                    <FaYoutube size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topics">
            <h3>Topics</h3>
            <div className="tags_holder">
              {singleArticle.tags.map((tag, index) => (
                <div key={index} className="tag_cover">
                  <h4>{tag}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="article_content">
          <p>{singleArticle?.description}</p>
          <img
            src={singleArticle?.images[1] || singleArticle?.images[0]}
            alt="article image"
          />
          <div className="quote">
            <p>
              How many of these have you heard before? I would like to share the
              truth about these common oral health myths I hear from patients
              almost every day. Read on to learn about them and how to keep your
              mouth healthy. Their separate existence is a myth.
            </p>
          </div>
          <ol>
            <li>
              How many of these have you heard before? I would like to share the
              truth about these common oral health myths I hear from{" "}
            </li>
          </ol>
          <ul>
            <li>How many of these have you heard before?</li>
            <li>
              I would like to share the truth about these common oral health
              myths I hear from patients almost every day. Read on to learn
              about them and how to keep your mouth healthy. Their separate
              existence is a myth.
            </li>
          </ul>
          <h2>Other Useful Information</h2>
          <p>
            Their separate existence is a myth. For science, music, sport, etc,
            Europe uses the same vocabulary. The languages only differ in their
            grammar, their pronunciation and their most common words. Everyone
            realizes why a new common language would be desirable: one could
            refuse to pay expensive translators. Their separate existence is a
            myth.
          </p>
          <p>
            To achieve this, it would be necessary to have uniform grammar,
            pronunciation and more common words. If several languages coalesce,
            the grammar of the resulting language is more simple and regular
            than that of the individual.
          </p>

          <img
            src={singleArticle?.images[2] || singleArticle?.images[0]}
            alt="article image last"
          />
        </div>
      </div>
      <h1 className="suggest_heading">What to read next</h1>
      <hr />
      <div className="suggested">
        {suggestedArticles?.slice(0, 2).map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
        <div className="hori_layout">
          {suggestedArticles?.slice(2).map((article, index) => (
            <ArticleCard key={index} specialSuggestClass={true} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsideArticlePage;
