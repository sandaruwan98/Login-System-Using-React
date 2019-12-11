import React, { Component } from "react";
import { Col, Row, Image, Container } from "react-bootstrap";
import "./News.css";

class News extends Component {
  state = {};
  render() {
    return (
      <div>
        <Image src="assets/cv2.jpg" className="HeadImagew" />
        <div className="main-section">
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={7}>
              <p>
                And maybe, maybe, maybe... Don't fight it, use what happens.
                This painting comes right out of your heart. Every single thing
                in the world has its own personality - and it is up to you to
                make friends with the little rascals. Let your imagination be
                your guide.
              </p>
              <p>
                I guess I'm a little weird. I like to talk to trees and animals.
                That's okay though; I have more fun than most people. Maybe
                there's a happy little Evergreen that lives here. Let's make a
                happy little mountain now. When you buy that first tube of paint
                it gives you an artist license. Everyone needs a friend. Friends
                are the most valuable things in the world. Only God can make a
                tree - but you can paint one.
              </p>
              <p>
                There we are. At home you have unlimited time. This is probably
                the greatest thing to happen in my life - to be able to share
                this with you. But they're very easily killed. Clouds are
                delicate. A thin paint will stick to a thick paint.
              </p>
              <p>
                Just take out whatever you don't want. It'll change your entire
                perspective. This is a happy place, little squirrels live here
                and play. It's life. It's interesting. It's fun. We touch the
                canvas, the canvas takes what it wants. Maybe we got a few
                little happy bushes here, just covered with snow. Here we're
                limited by the time we have.
              </p>
              <p>
                There we are. At home you have unlimited time. This is probably
                the greatest thing to happen in my life - to be able to share
                this with you. But they're very easily killed. Clouds are
                delicate. A thin paint will stick to a thick paint.
              </p>
              <p>
                Just take out whatever you don't want. It'll change your entire
                perspective. This is a happy place, little squirrels live here
                and play. It's life. It's interesting. It's fun. We touch the
                canvas, the canvas takes what it wants. Maybe we got a few
                little happy bushes here, just covered with snow. Here we're
                limited by the time we have.
              </p>
            </Col>
            <Col xs={12} sm={5} className="side-section">
              <Image src="assets/cv1.jpg" />
              <p>
                Don't hurry. Take your time and enjoy. Follow the lay of the
                land. It's most important. Let's put some happy trees and bushes
                back in here. I can't think of anything more rewarding than
                being able to express yourself to others through painting. For
                the lack of a better word I call them hangy downs.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default News;
