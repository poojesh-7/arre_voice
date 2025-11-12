import React, { useState } from "react";
import "./styles/ArticlesItems.css";
import ArticleCard from "../ui/ArticleCard";
import Pagination from "../ui/Pagination";

const ArticlesItems = ({ data }) => {
  const pattern = [1, 2, 3, 4];
  const elementsWithSpans = data?.map((el, index) => {
    const span = pattern[index % pattern.length];
    return { ...el, span };
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(data?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = elementsWithSpans?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      <div className="heading_sub">
        <h1>Latest Stories</h1>
        <p>
          Home/<b>Latest Stories</b>
        </p>
      </div>
      <hr />
      <div className="listing_section">
        {currentData?.map((article, index) => {
          return (
            <ArticleCard
              key={article.id}
              specialClass={true}
              spanVal={article.span}
              {...article}
            />
          );
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ArticlesItems;
