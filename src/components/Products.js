import {
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  List,
  ListItem,
  ListSubheader,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect, useState } from "react";

const Products = () => {
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
      img: "/images/products/mercedes.png",
      title: "Mercedes",
      price: "$110 000",
      seller: "Cezmi",
      rows: 2,
      cols: 2,
      featured: true,
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
      img: "/images/products/noname.png",
      title: "Black Beauty",
      price: "$225 000",
      seller: "Cezmi",
      rows: 2,
      cols: 2,
      featured: true,
    },
  ];
  const [butVal, setButVal] = useState("List Item");
  const [image, setImage] = useState("");
  const [loadVal, setLoadVal] = useState(true);

  const imageViewFun = () => {
    setImage(
      <ImageList sx={{ width: 500, height: 500 }}>
        <ImageListItem key="subheader" cols={2}>
          <ListSubheader component="div" >Cars</ListSubheader>
        </ImageListItem>
        {items.map((item) => (
          <ImageListItem key={item.img}>
            <img
              //srcSet={`${item.img}?w=248&fit=crop&auto=format&drp=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={`Seller : ${item.seller}`}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
    setButVal("LIST VIEW");
    setLoadVal(false);
  };

  const listViewFun = () => {
    setImage(
        <List>
            {
                items.map((item) => (
                <ListItem>
                    <h4>{item.title}</h4>
                    <img src={item.img} height="60px" alt={item.title} />
                </ListItem>
                ))
            }
        </List>
      
    );
    setButVal("PIC VIEW");
    setLoadVal(true);
  };

  const changer = () => {
    if(loadVal) {
        imageViewFun();
    } else {
        listViewFun();
    }
  }

  return (
    <div>
      <Button onClick={changer}>{butVal}</Button> <br />
      {image}
    </div>
  );
};

export default Products;

//https://mui.com/material-ui/react-image-list/
