import "./styles/ArticleList.css";
import { GetPosts } from "../../api/api";
import useHttp from "../../customhook/useHttp";
import ArticleCard from "../ui/ArticleCard";
import Sidebar from "../ui/Sidebar";

const ArticleList = () => {
  const { data: articlesData, error, isLoading } = useHttp(() => GetPosts(4));

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!articlesData || articlesData.length === 0) {
    return <p>No articles available.</p>;
  }

  const horizontalCards = articlesData.slice(0, 3);
  const verticalCards = articlesData.slice(3);

  return (
    <div className="article_list">
      <Sidebar />

      {horizontalCards.map((article, index) => (
        <ArticleCard key={article.id} {...article} />
      ))}

      {verticalCards.map((article) => (
        <div className="single_cover">
          <ArticleCard key={article.id} {...article} specialClass={true} />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
