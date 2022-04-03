import { Container, Button, Carousel, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/carousel.css";
import React from "react";

const Carouselitems = () => {
  return (
    <Carousel variant="dark" className="carousel-container">
      <Carousel.Item>
        <a href="https://suspicious-payne-bbe986.netlify.app/">
          <img
            className="d-block w-100"
            src={require("../images/The-store.jpg")}
            alt="First slide"
          />
          <Carousel.Caption className="d-none d-md-block">
            <h3>The Store</h3>
            <p>Wordpress app where we tried to take product pictures ourselfs and focus on textures and colours</p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="https://distracted-clarke-5f4c72.netlify.app/">
          <img
            className="d-block w-100"
            src={require("../images/rainydays.png")}
            alt="Second slide"
          />

          <Carousel.Caption className="d-none d-md-block">
            <h3>RainyDays</h3>
            <p>This was my first build with Javascript</p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://blissful-agnesi-0c118f.netlify.app/">
          <img
            className="d-block w-100"
            src={require("../images/science-museum.png")}
            alt="Third slide"
          />

          <Carousel.Caption className="d-none d-md-block">
            <h3>Science Museum</h3>
            <p>
              the first site i designed and coded in HTML & CSS
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
};
export default Carouselitems;
