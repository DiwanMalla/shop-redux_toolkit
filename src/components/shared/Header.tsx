import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
const Header = () => {
  const cartProduct = useSelector((state) => state.cart);
  console.log(cartProduct);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">D1 Mart</Navbar.Brand>
          <Nav.Link href="/">Product</Nav.Link>

          <Nav.Link href="/cart">My Bag {cartProduct.length}</Nav.Link>

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
