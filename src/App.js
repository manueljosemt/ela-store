import React from "react";
import { Layout, Col, Row } from "antd";
import Product from "./components/product";
import Uno from "./images/01.jpeg";
import Dos from "./images/02.jpeg";
import Tres from "./images/03.jpeg";
import Cuatro from "./images/04.jpeg";
import Cinco from "./images/05.jpeg";
import Seis from "./images/06.jpeg";
import Ocho from "./images/08.png";
import Diez from "./images/10.jpeg";

const { Header, Content, Footer } = Layout;

function App() {
  const data = [
    {
      id: 1,
      image: Uno,
      title: "Dispensador de agua electrico",
      price: "6.000",
    },
    {
      id: 2,
      image: Dos,
      title: "Set de moldes desmontables",
      price: "12.000",
    },
    {
      id: 3,
      image: Diez,
      title: "Freidora de aire hoffmans",
      price: "45.000",
    },
    {
      id: 4,
      image: Cuatro,
      title: "Freidoras electrica 6 litros",
      price: "40.000",
    },
    {
      id: 5,
      image: Cinco,
      title: "Batidora bosh",
      price: "18.000",
    },
    {
      id: 6,
      image: Seis,
      title: "Procesadores y picatodos para alimentos",
      price: "28.000",
    },
    {
      id: 7,
      image: Ocho,
      title: "Cocinas eléctricas de 2 hornillas",
      price: "14.990",
    },
    {
      id: 8,
      image: Tres,
      title: "Freidoras Eléctricas de 12 Litros",
      price: "72.000",
    },
  ];

  return (
    <Layout className="layout">
      <Header style={{background: "#884af7"}}>
        <div className="logo">
          <h1 style={{color: "#ffffff", fontWeight: "bold"}}>ELA STORE</h1>
        </div>
      </Header>
      <Content style={{ padding: "50px 50px" }}>
        <Row gutter={16}>
          {data.map((item) => (
            <Col key={item.id} className="gutter-row" span={{ md: 6, sm: 24, xs: 24 }}>
              <Product
                image={item.image}
                title={item.title}
                price={item.price}
              />
            </Col>
          ))}
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <h2>+56946518345</h2>
      Escribenos via whatsapp haz click <a href="https://wa.me/56946518345">aqui</a>
      </Footer>
    </Layout>
  );
}

export default App;
