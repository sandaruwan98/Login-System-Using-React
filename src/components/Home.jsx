import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron>
          <h2>Welcome to React</h2>
          <p>React is Awesome,React router & Bootstrap</p>
        </Jumbotron>
        <Link to="/about">
          <Button bsStyle="primary">About</Button>
        </Link>
      </div>
    );
  }
}

export default Home;
