import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className="grid gap-8">
      <h3>from products</h3>
      {products?.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
