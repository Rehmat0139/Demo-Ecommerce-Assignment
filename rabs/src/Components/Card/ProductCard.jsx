import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../CardContext/CardContext";

export default function ProductCard() {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();

        setData(showAll ? products : products.slice(0, 4));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [showAll]);

  const handleShowAllClick = () => {
    setShowAll(true);
  };

  if (!data.length) {
    return null;
  }

  return (
    <>
      <Grid container spacing={2}>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }} style={{ border: "1px solid grey" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="product">
                    {product.title[0]}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={product.title}
                subheader={product.date}
              />
              <CardMedia
                component="img"
                height="194"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Rating: {product.rating.rate} / 5
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button variant="contained" onClick={() => addToCart(product)}>
                  Add To Cart
                </Button>
                <Link to={`/product/${product.id}`}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    style={{ marginLeft: "1rem" }}
                  >
                    Details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {!showAll && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Button variant="contained" onClick={handleShowAllClick}>
            Show All
          </Button>
        </div>
      )}
    </>
  );
}
