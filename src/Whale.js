import React, { useEffect, useState } from "react";
import { Card, Button, CardDeck } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import whale from "./whale.css";

function Whale() {
  const dispatch = useDispatch();
  const [whales, setWhales] = useState({});
  let whaleDS = {};

  useEffect(() => {
    getWhales();
  }, []);

  const getWhales = () => {
    fetch("http://hotline.whalemuseum.org/api.json")
      .then((res) => res.json())
      .then(
        (result) => dispatch({ type: "SET_WHALES", payload: result })
        // {
        //   for (let i = 0; i < result.length; i++) {
        //     whaleDS[result[i].species] = (whaleDS[result[i].species] || 0) + 1;
        //   }

        //   setWhales(whaleDS);
        //   console.log(result);
        //   dispatch({
        //     type: "SET_WHALES",
        //     payload: result,
        //   });
        // },
        // (error) => {
        //   console.log(error);
        // }
      );
  };
  console.log(whales);
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

  const moreInfo = (x) => {
    if (x === "humpback") {
      return (
        <Card.Link className="mt-auto" href="">
          Learn more about Humpback Whales
        </Card.Link>
      );
    } else if (x === "orca") {
      return (
        <Card.Link href="" className="mt-auto">
          Learn more about Orcas
        </Card.Link>
      );
    } else if (x === "harbor porpoise") {
      return (
        <Card.Link href="" className="mt-auto">
          Learn more about Harbor Porpoise
        </Card.Link>
      );
    } else if (x === "gray whale") {
      return (
        <Card.Link href="" className="mt-auto">
          Learn more about Gray Whales
        </Card.Link>
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
          <Card.Title>{x}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {whales[x]} {x} have been spotted
          </Card.Subtitle>
          <Card.Body className="d-flex flex-column">{moreInfo(x)}</Card.Body>
        </Card>
      </div>
    ));
  };

  return (
    <div style={{ display: "inline-flex" }}>
      {/* {renderWhales()} */}
      hi
    </div>
  );
}

export default Whale;
