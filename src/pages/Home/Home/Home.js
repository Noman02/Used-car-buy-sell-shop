import React from "react";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import BannerSection from "../Banner/BannerSection";
import CategoriesBanner from "../Banner/CategoriesBanner";

const Home = () => {
  return (
    <div>
      <CategoriesBanner></CategoriesBanner>
      <AdvertisedItems></AdvertisedItems>
      <BannerSection></BannerSection>
    </div>
  );
};

export default Home;
