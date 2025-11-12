import "./styles/LatestStoriesSection.css";
import { GetPosts } from "../../api/api";
import useHttp from "../../customhook/useHttp";
import ArticleCard from "../ui/ArticleCard";

const LatestStoriesSection = () => {
  const { data: articlesData, error, isLoading } = useHttp(() => GetPosts(5));

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!articlesData || articlesData.length === 0) {
    return <p>No articles available.</p>;
  }

  const horizontalCards1 = articlesData.slice(0, 2);
  const verticalCards = articlesData.slice(2, 3);
  const horizontalCards2 = articlesData.slice(0, 2);

  return (
    <>
      <div className="latest_stories_section">
        {horizontalCards1.map((article, index) => (
          <ArticleCard key={article.id} {...article} hideDescription={true} />
        ))}

        {verticalCards.map((article) => (
          <div className="mid_card">
            <ArticleCard
              key={article.id}
              {...article}
              specialMediumClass={true}
            />
          </div>
        ))}

        {horizontalCards2.map((article, index) => (
          <ArticleCard key={article.id} {...article} hideDescription={true} />
        ))}
      </div>
    </>
  );
};

export default LatestStoriesSection;
