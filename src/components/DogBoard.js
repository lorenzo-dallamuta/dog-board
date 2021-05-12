import { useEffect, useState, useRef } from "react";
import useFetch from "../services/useFetch";
import DogCard from "./DogCard";
import _ from "lodash";
import { Col, Container, Form, Row } from "react-bootstrap";

const contStyles = {
  paddingTop: "5px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
};

export default function DogBoard() {
  const [age, setAge] = useState(2);
  const [weight, setWeight] = useState(1);
  const [dogs, setDogs] = useState([]);

  const { data, error, loading } = useDogs("dogs", age);

  useEffect(() => {
    if (_.isEmpty(data)) return;
    setDogs(
      data.filter((dog) => {
        switch (age) {
          case "0":
            return dog.age < 1;
          case "1":
            return dog.age > 1 && dog.age < 3;
          case "2":
            return dog.age > 3 && dog.age < 10;
          case "3":
            return dog.age > 10;
          default:
            return dog;
        }
      })
    );
  }, [age, data]);

  useEffect(() => {
    if (_.isEmpty(data)) return;
    setDogs(
      data.filter((dog) => {
        switch (weight) {
          case "0":
            return dog.weight < 10;
          case "1":
            return dog.weight > 10 && dog.weight < 25;
          case "2":
            return dog.weight > 25;
          default:
            return dog;
        }
      })
    );
  }, [weight, data]);

  if (loading) return <div>I'm loading</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Container style={contStyles}>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formBasicRange">
              <Form.Control
                type="range"
                min="0"
                max="3"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <Form.Label>
                {age < 1
                  ? "Puppy"
                  : age < 2
                  ? "Youngster"
                  : age < 3
                  ? "Adult"
                  : "Senior"}
              </Form.Label>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Group controlId="formBasicRange">
              <Form.Control
                type="range"
                min="0"
                max="2"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <Form.Label>
                {weight < 1 ? "Small" : weight < 2 ? "Regular" : "Large"}
              </Form.Label>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        {dogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </Row>
    </Container>
  );
}

function useDogs(url) {
  const { data, error, loading } = useFetch(url);
  const dogs = useRef();
  useEffect(() => {
    dogs.current = _.shuffle(data);
  }, [data]);
  return { data: dogs.current, error, loading };
}
