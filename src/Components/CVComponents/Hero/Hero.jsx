import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../CVAssets/HeroImg.jpg"
import "./Hero.css"

const Hero = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Unlock Your Professional Potential: Master the Art of CV
                Preparation and Stand Out in Your Career Journey!
              </h2>
              <p className="mb-5">
                Elevate Your CV: Craft Your Path to Success
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img curved-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
