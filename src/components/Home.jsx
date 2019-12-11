import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Jumbotron, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron>
          <h2>Welcome to React</h2>
          <p>React is Awesome,React router & Bootstrap</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>

        <Row className="show-grid text-center">
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/p1.jpg"  className="profile-pic" />
            <h3>Dani</h3>
            <p>Here we're limited by the time we have. Now then, let's play. Don't be afraid to make these big decisions. </p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/p2.jpg"  className="profile-pic" />
            <h3>Mark</h3>
            <p>Here we're limited by the time we have. Now then, let's play. Don't be afraid to make these big decisions. </p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/p3.jpg"  className="profile-pic" />
            <h3>Dani</h3>
            <p>Here we're limited by the time we have. Now then, let's play. Don't be afraid to make these big decisions. </p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="assets/p4.jpg"  className="profile-pic" />
            <h3>Stacy</h3>
            <p>Here we're limited by the time we have. Now then, let's play. Don't be afraid to make these big decisions. </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
