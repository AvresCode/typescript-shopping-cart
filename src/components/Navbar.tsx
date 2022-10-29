import { Navbar as NavbarBS, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
export function Navbar() {
  return (
    <NavbarBS className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "2.5rem", height: "2.5rem" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <FaShoppingCart />
        </Button>
      </Container>
    </NavbarBS>
  );
}
