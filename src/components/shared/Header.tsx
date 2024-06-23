/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  //@ts-expect-error
  const cartProduct = useSelector((state) => state.cart);
  console.log(cartProduct);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={Link} to="#">
            D1 Mart
          </Navbar.Brand>
          <Nav.Link as={Link} to="/">
            Product
          </Nav.Link>

          <Nav.Link as={Link} to="/cart">
            My Bag {cartProduct.length}
          </Nav.Link>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
