import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Container} from 'react-bootstrap';
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
        <Container>
         
        </Container>
        
      </div>
    );
  }
}

export default Home;
