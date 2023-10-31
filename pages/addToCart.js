import React, { useState } from "react";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = async (productId, quantity) => {
    try {
      const response = await fetch("https://sasi-be.onrender.com/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "123", // Replace with the actual user ID or a way to identify the user
          productId,
          quantity,
        }),
      });

      if (response.ok) {
        // Handle success (e.g., update cart state)
        const updatedCartData = await response.json();
        // Update your cart state or take any other necessary action
        console.log("Product added to cart:", updatedCartData);
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Error adding product to cart");
      }
    } catch (error) {
      console.error("API error:", error);
    }
  };

  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={() => addToCart(product.id, quantity)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
