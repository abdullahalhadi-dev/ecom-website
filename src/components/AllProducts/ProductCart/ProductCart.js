import React from "react";
import "./ProductCart.style.css";


const ProductCart = (props) => {
  const productCart = props.productCart;

  const totalPrice = productCart.reduce((sum, product)=> sum + product.price, 0);
  return (
    <div className="cart">
      <h2>My Cart</h2>
      <h4>Product Quantity: {productCart.length}</h4>
        <div className="title">
            <h3>Product Title:
        {
            productCart.map(productTitle => <li>{productTitle.title}</li>)
        
        }
            </h3>
        </div>
        <h4>Total Price: ${totalPrice}</h4>
    </div>
  );
};

export default ProductCart;
