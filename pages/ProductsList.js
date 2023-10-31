import React from "react";
import { Col } from "reactstrap";
const ProductCard = ({ product }) => {
  const cardStyle = {
    backgroundImage: `url(${product.image})`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "300px", 
  };

  return (
    <Col lg="4" md="6" className="mb-4">
      <div className="product-card" style={cardStyle}>
        <div className="product-content">
          <h3>{product.productName}</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </Col>
  );
};

const ProductsList = ({ data }) => {
  return (
    <>
      {data.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </>
  );
};

export default ProductsList;
