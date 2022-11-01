import { Navbar as NavbarBS, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
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
        {/* if there is no item in shopping cart, it does not appear*/}

        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "2.5rem", height: "2.5rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <FaShoppingCart />

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.3rem",
                height: "1.3rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(35%, 35%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBS>
  );
}
