import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {
  image: string | undefined;
  name: string | undefined;
  desc: any;
  site: string | undefined;
  github: string | undefined;
};

const Product: React.FC<Props> = (props) => {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    // <Card sx={{ maxWidth: 345 }}>
    //     <CardMedia
    //         component="img"
    //         sx={{ width: 260 }}
    //         image={props.image}
    //         alt={props.name}
    //     />

    //     <CardContent>
    //         <Typography gutterBottom variant="h5" component="div">
    //             {props.name}
    //         </Typography>
    //         <Typography
    //             variant="body2"
    //             color="text.secondary"
    //             sx={{ marginBottom: "20px" }}
    //         >
    //             Price: {props.price}
    //         </Typography>
    //         <Button
    //             onClick={props.onAddToBasket}
    //             variant="contained"
    //             color="primary"
    //             sx={{ backgroundColor: "primary.light" }}
    //         >
    //             Add to Basket
    //         </Button>
    //     </CardContent>
    // </Card>
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Card sx={{ display: "flex", flexDirection: matches ? "column" : "row" }}>
        <CardMedia
          component="img"
          sx={{ width: matches ? "100%" : "50%" }}
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginBottom: "20px" }}
          >
            {props.desc
              .split("\n")
              .map(
                (
                  line:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | React.PromiseLikeOfReactNode
                    | null
                    | undefined,
                  i: React.Key | null | undefined
                ) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                )
              )}
          </Typography>
          <a href={props.site} target="_blank" rel="noopener noreferrer">
            <Button
              variant="contained"
              color="primary"
              sx={{ backgroundColor: "primary.light", margin: "5px" }}
            >
              Website
            </Button>
          </a>
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <Button
              variant="contained"
              color="primary"
              sx={{ backgroundColor: "primary.light" }}
            >
              GitHub
            </Button>
          </a>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Product;
