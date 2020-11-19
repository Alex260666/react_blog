import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import {  Container, CardDeck, Card, Button } from "react-bootstrap";
import greenImg from "../assets/green.jpg";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">La nature</h2>
          <CardDeck className="m-4">
            <Card bg="success">
              <Card.Img variant="top" src={greenImg} />
              <Card.Body>
                <Card.Title>hhhhhh</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </Card.Text>
                <Button variant="primary">About</Button>
              </Card.Body>
            </Card>
            <Card bg="warning">
              <Card.Body>
                <Card.Title>hhhhhh</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </Card.Text>
                <Button variant="primary">About</Button>
              </Card.Body>
              <Card.Img variant="bottom" src={greenImg} />
            </Card>
            <Card bg="secondary">
              <Card.Img variant="top" src={greenImg} />
              <Card.Body>
                <Card.Title>hhhhhh</Card.Title>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </Card.Text>
                <Button variant="primary">About</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}
