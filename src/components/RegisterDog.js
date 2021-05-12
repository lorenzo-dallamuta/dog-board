// TODO: when this becomes managed have a preview card in the page

import { useState } from "react";
import { Button, Container, Form, Col, InputGroup } from "react-bootstrap";

import { saveDog } from "../services/dogService";

export default function RegisterDog() {
  const [validated, setValidated] = useState(false);

  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [breed, setBreed] = useState(null);
  const [weight, setWeight] = useState(null);
  const [sex, setSex] = useState(null);
  const [url, setUrl] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const dog = {
        url: url,
        name: name,
        breed: breed,
        age: age,
        weight: weight,
        sex: sex,
      };
      saveDog(dog);
    }
    setValidated(true);
  }

  return (
    <>
      <Container>
        <Form
          className="mx-3"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Row>
            <Form.Group as={Col} controlId="formDogName">
              <Form.Label>Name of the puppy</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please, input a valid name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formDogBreed">
              <Form.Label>Breed of the puppy (optional)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formDogAge">
              <Form.Label>Age of the puppy</Form.Label>
              <Form.Control
                required
                type="text"
                pattern={"^\\d+$"}
                placeholder="Name"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please, input a valid number
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formDogWeight">
              <Form.Label>Weight of the puppy (Kg)</Form.Label>
              <Form.Control
                required
                type="text"
                pattern={"^\\d+$"}
                placeholder="Name"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please, input a valid number
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formDogSex" sm={3}>
              <Form.Label>Sex</Form.Label>
              <InputGroup hasValidation className="justify-content-around">
                <Form.Check
                  required
                  inline
                  label="male"
                  type="radio"
                  id="inline-radio-1"
                  name="dog-sex"
                  value="male"
                  onChange={(e) => setSex(e.target.value)}
                  checked={sex === "male"}
                />
                <Form.Check
                  required
                  inline
                  label="female"
                  type="radio"
                  id="inline-radio-2"
                  name="dog-sex"
                  value="female"
                  onChange={(e) => setSex(e.target.value)}
                  checked={sex === "female"}
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formDogUrl">
              <Form.Label>Picture address</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">
                    http://
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  required
                  type="text"
                  pattern=".*\.(jpg|png|gif)\??.*"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid image address. Accepted formates are
                  jpg, png, gif
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Offer
          </Button>
        </Form>
      </Container>
    </>
  );
}
