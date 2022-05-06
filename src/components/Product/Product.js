import React from "react";
import { Button, Card } from "react-bootstrap";
import './Product.style.css';

const Product = (props) => {
  const { title, descriptions, image, price } = props.goToProduct;
  const handleAddProducts = props.handleAddProducts;


  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="p-3 image" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div>{descriptions}</div>
          <div>
              <h3>${price}</h3>
          </div>
          <Button onClick={()=>handleAddProducts(props.goToProduct)} variant="primary">Add Product</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
