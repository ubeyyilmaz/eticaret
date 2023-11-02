import { Fragment } from "react";
import React from "react";
import Category from "../components/Layout/Categories/Category";
import Products from "../components/Layout/Products/Products";
import CampaignSingle from "../components/Layout/CampaignSingle/CampaignSingle";


const ShopPage = () => {
  return (
    <Fragment>

      <Category />
      <Products />
      <CampaignSingle />
      <Products />

    </Fragment>
  );
};

export default ShopPage;
