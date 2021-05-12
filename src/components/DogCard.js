import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const cardStyles = {
  margin: "10px",
  padding: "5px",
  width: "18rem",
  flexGrow: 1,
};

const bodyStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const imageStyles = {
  height: "15rem",
  objectFit: "cover",
};

export default function DogCard({ dog }) {
  const { id, name, breed, age, weight, sex, url } = dog;
  return (
    <Card style={{ ...cardStyles }}>
      <Card.Img variant="top" src={url} style={imageStyles} />
      <Card.Body style={{ ...bodyStyles }}>
        <span style={{ marginBottom: "10px" }}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {name} is {age < 1 ? "a puppy" : `${age} years old`} and{" "}
            {sex === "male" ? "he" : "she"}'s a{" "}
            {weight < 10 ? "small" : weight > 25 ? "big" : ""}{" "}
            {breed === null ? "dog" : breed}
          </Card.Text>
        </span>
        <Button variant="primary" as={Link} to={`/dogs/${id}`}>
          Know more about {name}
        </Button>
      </Card.Body>
    </Card>
  );
}
