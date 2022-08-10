import React from "react";
import { Card } from "antd";

const { Meta } = Card;

function Product({image, title, price}) {
  return (
    <Card
      hoverable
      style={{ width: 240, marginBottom: 50 }}
      cover={
        <img
          alt="example"
          src={image}
        />
      }
    >
      <Meta title={title} description={`$${price}`} />
    </Card>
  );
}

export default Product;
