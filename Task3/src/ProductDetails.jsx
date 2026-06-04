import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Details Page</h1>

      <h2>Product ID: {id}</h2>

      <p>
        This page displays details for product {id}.
      </p>
    </div>
  );
}

export default ProductDetails;