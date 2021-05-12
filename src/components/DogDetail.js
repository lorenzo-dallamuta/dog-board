import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../services/useFetch";

const bodyStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const bigImageStyles = {
  height: "50vh",
  objectFit: "cover",
  borderRadius: "5px 0px 0px 0px",
};

const buttonStyle = {
  borderRadius: "0px 0px 5px 5px",
  height: "5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function DogDetail() {
  const { id: dogId } = useParams();
  const { data, error, loading } = useFetch(`dogs/${dogId}`);

  if (loading) return <div>I'm loading</div>;
  if (error) return <div>{error.message}</div>;

  const { name, breed, age, weight, sex, url } = data;

  return (
    <Container>
      <Card className={"mt-5"}>
        <Row>
          <Col>
            <Card.Img src={url} style={bigImageStyles} />
          </Col>
          <Col className="d-flex align-items-center">
            <Card.Body style={{ ...bodyStyles }}>
              <span style={{ marginBottom: "10px" }}>
                <Card.Title>
                  <h2>{name}</h2>
                </Card.Title>
                <hr />
                <Card.Text>
                  <h3>
                    Age: {age < 1 ? "less than a year old" : `${age} years old`}
                  </h3>
                  <h3>Sex: {sex === "male" ? "boy" : "girl"}</h3>
                  <h3>
                    Weight: {weight}Kg (
                    {weight < 10 ? "small" : weight > 25 ? "big" : ""} )
                  </h3>
                  <h3>
                    Breed:{" "}
                    {breed === null
                      ? `${sex === "male" ? "boy" : "girl"}'s just a lovely dog`
                      : breed}
                  </h3>
                </Card.Text>
              </span>
            </Card.Body>
          </Col>
        </Row>
        <Button as={Link} to={`/adopt/${dogId}/${name}`} style={buttonStyle}>
          <h3>Offer {name} a home</h3>
        </Button>
      </Card>
    </Container>
  );
}
