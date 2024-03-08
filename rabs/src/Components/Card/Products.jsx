import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";

const cardStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "2rem 0 2rem 0",
  paddingLeft: "1rem",
};

const Products = () => {
  return (
    <>
      <Grid container style={cardStyle}>
        <Grid item md={12}>
          <ProductCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Products;
