import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Instruction.css";

const Instrution = ({ image, header, content, imageAlignment = "right" }) => {
  return (
    <section>
      <Container>
        <Row>
          {imageAlignment == "right" ? (
            <>
              <Col lg="6" md="6">
                <div>
                  <h2>{header}</h2>
                  <p>{content}</p>
                </div>
              </Col>

              <Col lg="6" md="6">
                <div>
                  <img src={image} alt="" className="w-100" />
                </div>
              </Col>
            </>
          ) : (
            <>
              <Col lg="6" md="6">
                <div>
                  <img src={image} alt="" className="w-100" />
                </div>
              </Col>
              <Col lg="6" md="6">
                <div>
                  <h2>{header}</h2>
                  <p>{content}</p>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Instrution;
