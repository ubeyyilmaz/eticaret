import React from "react";
import CategoryItem from "./CategoryItem";
import "./Category.css";
const Category = () => {
  return (
    <div>
      <section className="categories">
        <div className="container">
          <div className="section-title">
            <h2>All Categories</h2>
            <p>Summer Collection New Morden Design</p>
          </div>
          <ul className="category-list">
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Category;
