import { Navbar, Nav } from "react-bootstrap";

export default function ShopNavbar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="justify-content-between"
      sticky="top"
    >
      <Nav.Link href="/dogs">Dogs</Nav.Link>
      <Nav.Link href="/offer">Offer a dog</Nav.Link>
      <Nav.Link href="/adopt">Offer a house</Nav.Link>
    </Navbar>
  );
}
