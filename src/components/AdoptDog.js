import { useState } from "react";
import { Button, Container, Form, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const initFullName = {
  firstName: "",
  lastName: "",
};

const buttonStyles = {
  height: "2.5rem",
  alignSelf: "flex-end",
  marginBottom: "15px",
};

export default function AdoptDog() {
  const { id: dogId, name } = useParams(); // use to add property taken: true
  const [validated, setValidated] = useState(false);

  const [dogName, setDogName] = useState(name);

  const [fullName, setFullName] = useState(initFullName);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
    }
    setValidated(true);
  }

  return (
    <Container>
      <Form
        className="mx-3"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Row>
          <Form.Group as={Col} controlId="formFirstName">
            <Form.Label>Dog's name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
              value={dogName}
              onChange={(e) => setDogName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button style={buttonStyles} as={Link} to="/dogs">
            All dogs
          </Button>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formFirstName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
              value={fullName.firstName}
              onChange={(e) =>
                setFullName((prev) => {
                  return { ...prev, firstName: e.target.value };
                })
              }
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formLastName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
              value={fullName.lastName}
              onChange={(e) =>
                setFullName((prev) => {
                  return { ...prev, lastName: e.target.value };
                })
              }
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Age of the puppy</Form.Label>
            <Form.Control
              required
              type="email"
              // pattern={"\w+@\w+\.{0,1}[a-zA-Z]{0,3}(\.[a-zA-Z]{2,3}$)"}
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please, input a valid number
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Age of the puppy</Form.Label>
            <Form.Control
              required
              type="tel"
              pattern={
                "((?:+|00)[17](?: |-)?|(?:+|00)[1-9]d{0,2}(?: |-)?|(?:+|00)1-d{3}(?: |-)?)?(0d|([0-9]{3})|[1-9]{0,3})(?:((?: |-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |-)[0-9]{3}(?: |-)[0-9]{4})|([0-9]{7}))"
              }
              placeholder="email"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please, input a valid number
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Contact
        </Button>
      </Form>
    </Container>
  );
}
