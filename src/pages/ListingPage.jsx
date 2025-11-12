import { GetPosts } from "../api/api";
import ArticlesItems from "../components/listingpage/ArticlesItems";
import useHttp from "../customhook/useHttp";

const ListingPage = () => {
  const { loading, data: articlesData, error } = useHttp(() => GetPosts(56));
  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!articlesData && articlesData?.length === 0) {
    return <p>No articles available.</p>;
  }
  return (
    <div>
      <ArticlesItems data={articlesData} />
    </div>
  );
};

export default ListingPage;
