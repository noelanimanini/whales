import React, { useEffect, useState } from "react";
import { Card, Button, CardDeck } from "react-bootstrap";
import whale from "./whale.css";

function Whale() {
  const [whales, setWhales] = useState({});
  const [info, setInfo] = useState({});
  let whaleDS = {};

  useEffect(() => {
    getWhales();
  }, []);

  const getWhales = () => {
    fetch("http://hotline.whalemuseum.org/api.json")
      .then((res) => res.json())
      .then(
        (result) => {
          for (let i = 0; i < result.length; i++) {
            whaleDS[result[i].species] = (whaleDS[result[i].species] || 0) + 1;
          }
          setInfo(result);
          setWhales(whaleDS);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const whaleImages = (x) => {
    if (x === "humpback") {
      return (
        <Card.Img
          className="cardImage"
          variant="top"
          src="https://images.unsplash.com/photo-1506666486876-fec82d6e1efc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1162&q=80"
        />
      );
    } else if (x === "orca") {
      return (
        <Card.Img
          className="cardImage"
          variant="top"
          src="https://images.unsplash.com/photo-1598202604734-f6fcd12b2384?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
      );
    } else if (x === "harbor porpoise") {
      return (
        <Card.Img
          variant="top"
          className="cardImage"
          src="https://www-waddensea-worldheritage-org.cdn.gofasterstripes.download/sites/default/files/styles/main_image_landscape_crop/public/19-04-24_Harbour%20porpoise_Phocoena-TS7.jpg?itok=2O8jWpQO"
        />
      );
    } else if (x === "gray whale") {
      return (
        <Card.Img
          variant="top"
          className="cardImage"
          src="https://whalewatchcabo.com/wp-content/uploads/Gray-Whale-Cabo-San-Lucas.jpg"
        />
      );
    }
  };
  const renderWhales = () => {
    return Object.keys(whales).map((x) => (
      <div key={x} className="container-fluid">
        <Card
          className="row mt-3 h-100 m-1"
          style={{ width: "17em", padding: "10px" }}
        >
          {whaleImages(x)}
          <Card.Body>
            <Card.Title>{x}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {whales[x]} {x} have been spotted
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    ));
  };

  return <div style={{ display: "inline-flex" }}>{renderWhales()}</div>;
}

export default Whale;
