import React, { Component } from "react";
import { Col, Image, Container } from "react-bootstrap";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/cv1.jpg" className="HeadImage" />

        <Col xs={12} sm={8} smOffset={2}>
          <Image src="assets/p1.jpg" className="about-p-p" />
          <h3>Frank the Tank</h3>
          <p>
            And maybe, maybe, maybe... Don't fight it, use what happens. This
            painting comes right out of your heart. Every single thing in the
            world has its own personality - and it is up to you to make friends
            with the little rascals. Let your imagination be your guide.
          </p>
          <p>
            I guess I'm a little weird. I like to talk to trees and animals.
            That's okay though; I have more fun than most people. Maybe there's
            a happy little Evergreen that lives here. Let's make a happy little
            mountain now. When you buy that first tube of paint it gives you an
            artist license. Everyone needs a friend. Friends are the most
            valuable things in the world. Only God can make a tree - but you can
            paint one.
          </p>
          <p>
            Let your heart be your guide. You can spend all day playing with
            mountains. Imagination is the key to painting. Take your time. Speed
            will come later. Let's make some happy little clouds in our world. A
            fan brush can be your best friend.
          </p>
        </Col>
      </div>
    );
  }
}
