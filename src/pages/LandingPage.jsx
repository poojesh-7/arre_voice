import ArticleList from "../components/homepage/ArticleList";
import FeaturedSection from "../components/homepage/FeaturedSection";
import HeroSection from "../components/homepage/HeroSection";
import LatestStoriesSection from "../components/homepage/LatestStoriesSection";
const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <ArticleList />
      <h1>Featured</h1>
      <hr />
      <FeaturedSection />
      <h1>Latest Stories</h1>
      <hr />
      <LatestStoriesSection />
    </div>
  );
};

export default LandingPage;
