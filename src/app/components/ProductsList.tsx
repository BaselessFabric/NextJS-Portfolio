import React from "react";
import Product from "./Product";
import products from "../modal/ProjectsData";

interface Props {}

const ProductsList: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "100%",
        margin: "50px auto",
      }}
    >
      {/* <h1>Products</h1> */}

      {products.map((product, index) => (
        // <li key={index}>
        //     {product.name} - {product.price}
        // </li>
        <div style={{ margin: "10px" }} key={index}>
          <Product
            name={product.getName()}
            image={product.getImage()}
            desc={product.getDesc()}
            site={product.getSite()}
            github={product.getGithub()}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
