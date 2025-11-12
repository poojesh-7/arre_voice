import "./Sidebar.css";

const Sidebar = () => {
  const trending_items = [
    { id: 1, title: "The UK’s Best Outdoor", category: "LIFESTYLE" },
    { id: 2, title: "The 17 Best Mascara of All Time", category: "FASHION" },
    {
      id: 3,
      title: "Best Christmas gift for fashion lovers",
      category: "NEWS",
    },
    {
      id: 4,
      title: "60 Best Christmas Gifts for Everybody in 2025",
      category: "FASHION",
    },
    {
      id: 5,
      title: "How To Stop Saturday’s Full Moon Affecting Your Sleep",
      category: "FASHION",
    },
  ];

  return (
    <aside className="trending_sidebar">
      <h2 className="trending_title">Trending</h2>
      <ul className="trending_list">
        {trending_items.map((item) => (
          <li key={item.id} className="trending_item">
            <div className="trend_number">{item.id}</div>
            <div className="trend_content">
              <p className="trend_title">{item.title}</p>
              <span className="trend_category">in {item.category}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
