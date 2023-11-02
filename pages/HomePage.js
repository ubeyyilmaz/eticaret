import Category from "../components/Layout/Categories/Category";
import Products from "../components/Layout/Products/Products";
import Sliders from "../components/Layout/Slider/Sliders";
import Campaigns from "../components/Layout/Campaigns/Campaigns";
import Blog from "../components/Layout/Blog/Blog";
import Brands from "../components/Layout/Brands/Brands";
import CampaignSingle from "../components/Layout/CampaignSingle/CampaignSingle";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <Sliders />
      <Category />
      <Products />
      <Campaigns />
      <Products />
      <Blog />
      <Brands />
      <CampaignSingle />
    </React.Fragment>
  );
};

export default HomePage;
