import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoryBanner from "./CategoryBanner";

const CategoriesBanner = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="font-bold">Browse items by category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories?.map((category) => (
          <CategoryBanner
            key={category._id}
            categoryItem={category}
          ></CategoryBanner>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBanner;
