import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";
import MyProduct from "./MyProduct";

const MyProducts = () => {
  const { user } = useContext(authContext);
  const { data: addproducts = [], isLoading } = useQuery({
    queryKey: ["addproducts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://used-cars-buy-sell-server.vercel.app/addproducts?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
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
