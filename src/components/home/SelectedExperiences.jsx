import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function SelectedExperience({ data }) {
  return (
    <Container fluid className="selected-experience-section bg-light p-5" id="selectedExperiences">
      <h2 className="display-4 text-center pb-5">{data.heading}</h2>
      
      <Row>
        {data.data.map((experience, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={experience.image} alt={experience.title} />
              <Card.Body>
                <Card.Title>{experience.title}</Card.Title>
                <Card.Text>{experience.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SelectedExperience;

