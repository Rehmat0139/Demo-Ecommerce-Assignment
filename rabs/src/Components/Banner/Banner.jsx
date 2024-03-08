import React from "react";
import "./Banner.css";
import clothBanner from "../../images/clothBanner.png";
import { Button, Grid } from "@mui/material";

const Banner = () => {
  return (
    <Grid container className="bannerBody">
      <Grid item xs={12} sm={6} className="bannerLeft">
        <Grid container>
          <Grid item>
            <h1>Exclusive Collections</h1>
            <p>
              Your one-stop destination for a seamless online shopping
              experience. Discover a curated selection of high-quality products,
              from fashion and electronics to home decor and more. With
              user-friendly navigation, secure transactions, and swift delivery,
              we prioritize customer satisfaction.
            </p>
            <Button variant="contained" color="secondary">
              Explore
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} className="bannerRight">
        <img className="clothBanner" src={clothBanner} alt="..." />
      </Grid>
    </Grid>
  );
};

export default Banner;
