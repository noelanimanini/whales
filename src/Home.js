import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Whale from "./Whale";
import Jumbotron from "./JumbotronContainer";

function Home() {
  const carousel = () => (
    <Carousel fade className="home">
      <Carousel.Item>
        <img
          width={500}
          height={500}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1568418038122-dc9c64a35c5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=670&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={500}
          height={500}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1555069811-3fce6ac918e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width={500}
          height={500}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  return (
    <div>
      <Jumbotron />
      {carousel()}
      <Whale />
    </div>
  );
}

export default Home;
