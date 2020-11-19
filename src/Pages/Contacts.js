import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default class Contacts extends Component {
  render() {
    return (
      <Container className="mt-5" style={{width: "500px"}}>
        <h2 className="text-left">Nous contacter :</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Votre adresse e-mail :</Form.Label>
            <Form.Control type="email" placeholder="Entrer email" />
            <Form.Text>
              Nous ne partageons jamais votre courrier avec qui que ce soit
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Votre message :</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">Envoyer</Button>
        </Form>
      </Container>
    );
  }
}
