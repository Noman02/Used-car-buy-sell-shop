import React from "react";
import { Link } from "react-router-dom";

const CategoryBanner = ({ categoryItem }) => {
  const { category, picture, adds, _id } = categoryItem;

  return (
    <Link to={`/products/${_id}`}>
      <div className="mt-12 hover:border-2">
        <div className="flex justify-center items-center">
          <div>
            <img className="lg:w-28 rounded-sm" src={picture} alt="" />
          </div>
          <div className="ml-4">
            <h2 className="text-xl">{category}</h2>
            <p className="text-sm">{adds}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryBanner;
