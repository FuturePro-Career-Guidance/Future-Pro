import React, { useState } from "react";
import "./Feedback.css";
import { Container, Row, Col } from "reactstrap";
import Form from "./Form";

const Feedback = () => {
  const [showForm, setShowForm] = useState(false);

  const handleMockInterviewsClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Submit your CV for get review from our industry experts</h2>
            
            <button className="btn" onClick={handleMockInterviewsClick}>
              Send us your resume
            </button>
            {showForm && <Form onClose={handleCloseForm} />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Feedback;
