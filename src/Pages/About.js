import React, { Component } from "react";
import { Container, Tab, Row, Col, Nav } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-5">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Design2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Design3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Design4</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Design5</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-4">
                <Tab.Pane eventKey="first">
                  <img src="https://i1.wp.com/blog.arcoptimizer.com/wp-content/uploads/2019/04/un-an-avec-figma.gif" alt=""/>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    src="
                                   https://images.pexels.com/videos/856997/free-video-856997.jpg" alt=""
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    src="
                                   https://images.pexels.com/videos/1307329/free-video-1307329.jpg" alt=""
                  />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://cdn.pixabay.com/photo/2020/04/04/01/10/covid-19-5000502_960_720.jpg" alt="" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://eskipaper.com/images/cool-illusion-wallpaper-1.jpg"  alt=""/>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
