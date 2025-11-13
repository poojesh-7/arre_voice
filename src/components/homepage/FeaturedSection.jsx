import { GetPosts } from "../../api/api";
import useHttp from "../../customhook/useHttp";
import ArticleCard from "../ui/ArticleCard";
import Loader from "../ui/Loader";
const FeaturedSection = () => {
  const {
    loading,
    data: singleArticle,
    error,
  } = useHttp(() => GetPosts("smartphones", 1));
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
    <div className="featured_list">
      {singleArticle && (
        <ArticleCard
          key={singleArticle[0].id}
          specialClass="true"
          {...singleArticle[0]}
        />
      )}
    </div>
  );
};
export default FeaturedSection;
