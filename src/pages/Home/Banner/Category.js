import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div>
      <h2>from products</h2>
      {products.map((product) => console.log(product))}
    </div>
  );
};

export default Category;
