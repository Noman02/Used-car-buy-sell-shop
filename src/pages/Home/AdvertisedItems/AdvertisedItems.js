import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertisedItem from "./AdvertisedItem";

const AdvertisedItems = () => {
  const { data: advertise } = useQuery({
    queryKey: ["advertised"],
    queryFn: async () => {
      const res = await fetch(
        "https://used-cars-buy-sell-server.vercel.app/addproducts/advertise?role=available"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="my-12 p-3">
      <h3 className="text-3xl font-semibold">Advertised Products</h3>
      <div className="mt-12">
        {advertise?.map((add) => (
          <AdvertisedItem key={add._id} add={add}></AdvertisedItem>
        ))}
      </div>
    </div>
  );
};

export default AdvertisedItems;
