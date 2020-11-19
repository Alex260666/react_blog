import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Media,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";


export default class Blog extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img
                className="mr-3"
                width={150}
                height={240}
                src="https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg" alt=""
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum est le faux texte standard de l'imprimerie depuis les
                  années 1500, quand un imprimeur anonyme assembla ensemble des
                  morceaux de texte pour réaliser un livre spécimen de polices
                  de texte. Il n'a pas fait que survivre cinq siècles, mais
                  s'est aussi adapté à la bureautique informatique, sans que son
                  contenu n'en soit modifié. Il a été popularisé dans les années
                  1960 grâce à la vente de feuilles Letraset contenant des
                  passages du Lorem Ipsum, et, plus récemment, par son inclusion
                  dans des applications de mise en page de texte, comme Aldus
                  PageMaker.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                className="mr-3"
                width={150}
                height={240}
                src="https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg" alt=""
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum est le faux texte standard de l'imprimerie depuis les
                  années 1500, quand un imprimeur anonyme assembla ensemble des
                  morceaux de texte pour réaliser un livre spécimen de polices
                  de texte. Il n'a pas fait que survivre cinq siècles, mais
                  s'est aussi adapté à la bureautique informatique, sans que son
                  contenu n'en soit modifié. Il a été popularisé dans les années
                  1960 grâce à la vente de feuilles Letraset contenant des
                  passages du Lorem Ipsum, et, plus récemment, par son inclusion
                  dans des applications de mise en page de texte, comme Aldus
                  PageMaker.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                className="mr-3"
                width={150}
                height={240}
                src="https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg" alt=""
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum est le faux texte standard de l'imprimerie depuis les
                  années 1500, quand un imprimeur anonyme assembla ensemble des
                  morceaux de texte pour réaliser un livre spécimen de polices
                  de texte. Il n'a pas fait que survivre cinq siècles, mais
                  s'est aussi adapté à la bureautique informatique, sans que son
                  contenu n'en soit modifié. Il a été popularisé dans les années
                  1960 grâce à la vente de feuilles Letraset contenant des
                  passages du Lorem Ipsum, et, plus récemment, par son inclusion
                  dans des applications de mise en page de texte, comme Aldus
                  PageMaker.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                className="mr-3"
                width={150}
                height={240}
                src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg" alt=""
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum est le faux texte standard de l'imprimerie depuis les
                  années 1500, quand un imprimeur anonyme assembla ensemble des
                  morceaux de texte pour réaliser un livre spécimen de polices
                  de texte. Il n'a pas fait que survivre cinq siècles, mais
                  s'est aussi adapté à la bureautique informatique, sans que son
                  contenu n'en soit modifié. Il a été popularisé dans les années
                  1960 grâce à la vente de feuilles Letraset contenant des
                  passages du Lorem Ipsum, et, plus récemment, par son inclusion
                  dans des applications de mise en page de texte, comme Aldus
                  PageMaker.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroupItem>Montagnes du monde</ListGroupItem>
                <ListGroupItem>Mers et océans</ListGroupItem>
                <ListGroupItem>Forets</ListGroupItem>
                <ListGroupItem>Animaux du monde</ListGroupItem>
                <ListGroupItem>Plus beau pays du monde</ListGroupItem>
              </ListGroup>
            </Card>
            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Le Lorem Ipsum est simplement du faux texte employé dans la
                  composition et la mise en page avant impression. Le Lorem
                  Ipsum est le faux texte standard de l'imprimerie depuis les
                  années 1500, quand un imprimeur anonyme assembla ensemble des
                  morceaux de texte pour réaliser un livre spécimen de polices
                  de texte.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
