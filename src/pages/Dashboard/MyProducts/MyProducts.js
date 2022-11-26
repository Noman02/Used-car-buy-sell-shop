import { useQuery } from "@tanstack/react-query";
import React from "react";
import MyProduct from "./MyProduct";

const MyProducts = () => {
  const {
    data: addproducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["addproducts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/addproducts");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold">My Products</h2>
      <div className="mt-12">
        {addproducts?.map((addProduct) => (
          <MyProduct key={addProduct._id} addProduct={addProduct}></MyProduct>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
