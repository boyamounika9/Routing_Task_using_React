import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Management Website</h1>

      <p>Welcome to our website.</p>

      <nav>
        <Link to="/products">Products</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Home;