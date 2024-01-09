import { Card, CardContent, Typography, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const items = [
  {
    img: "/images/products/acura.png",
    title: "Acura",
    price: "$25 000",
    seller: "Cezmi",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "/images/products/maseratti.png",
    title: "Maseratti",
    price: "$65 000",
    seller: "Cezmi",
    // rows: 2,
    // cols: 2,
    // featured: true
  },

  {
    img: "/images/products/redone.png",
    title: "Red Beauty",
    price: "$125 000",
    seller: "Cezmi",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "/images/products/mercedes.png",
    title: "Mercedes",
    price: "$110 000",
    seller: "Cezmi",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "/images/products/noname.png",
    title: "Black Beauty",
    price: "$225 000",
    seller: "Cezmi",
    rows: 2,
    cols: 2,
    featured: true,
  },
];

const useStyles = makeStyles({
  div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  card: {
    marginTop: "2%",
  },
});

const ProductsCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      {items.map((item) => (
        <Card
          variant="outlined"
          color="primary"
          sx={{ width: "200px" }}
          className={classes.card}
        >
          <div>
            <Typography level="title-lg"> {item.title} </Typography>
            <Typography level="body-sm"> {item.seller} </Typography>
          </div>

          <img src={item.img} alt={item.title} loading="lazy" height="120px" />

          <CardContent>
            <Button variant="outlined" size="md" color="primary">
              Purchase
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductsCard;
