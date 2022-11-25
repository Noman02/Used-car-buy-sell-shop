import React from "react";

const CategoryBanner = ({ categoryItem }) => {
  const { category, picture, adds, _id } = categoryItem;
  console.log(categoryItem);
  return (
    <div className="mt-12">
      <div className="flex justify-center items-center">
        <div>
          <img className="lg:w-28" src={picture} alt="" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl">{category}</h2>
          <p className="text-sm">{adds}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
