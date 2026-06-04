import React from "react";
import { Link } from "react-router-dom";

function Products() {

  const products = [
    { id: 101, name: "Laptop" },
    { id: 102, name: "Mobile" },
    { id: 103, name: "Headphones" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products Page</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;