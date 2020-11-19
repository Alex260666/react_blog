import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import v8Img from "../assets/v8.jpg";
import v9Img from "../assets/v9.jpg";
import v10Img from "../assets/v10.jpg";

// import { ListGroupItem } from "react-bootstrap";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-200" src={v8Img} alt="view8" />
          <Carousel.Caption>
            <h3>Viev Image</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-200" src={v9Img} alt="view9" />
          <Carousel.Caption>
            <h3>Viev Image</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-200" src={v10Img} alt="view10" />
          <Carousel.Caption>
            <h3>Viev Image</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
