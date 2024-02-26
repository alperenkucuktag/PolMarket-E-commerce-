import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card className='cartt' style={{ width: "15rem" }}>
      <Card.Img
        className='images'
        style={{ height: "200px", width: "15rem" }}
        variant='top'
        src={product.image}
      />
      <Card.Body className='cardBody'>
        <Card.Title>
          {product?.price} <span>TL</span>
        </Card.Title>
        <Card.Text className='ttitles'>{product?.title}</Card.Text>

        <Button
          className='btn'
          variant='primary'
          onClick={() => navigate(`products/${product?.id}`)}
        >
          Satın Al
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
