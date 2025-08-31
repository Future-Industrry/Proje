import React from "react";
import ArticleItem from "../../components/ArticleItem";

export default function MoreArticles() {
  return (
    <div className="p-3 container mx-auto ">
      <p className="mb-5 text-center">مهارت های نرم</p>
      <hr />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5">
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </div>
    </div>
  );
}
