import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { remove } from "../Store/CartSlice";
const CartProducts = () => {
  const productCart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const removeItem = (item) => {
    dispatch(remove(item));
  };
  const card = (
    <div className="flex flex-wrap gap-5 text-center">
      {productCart?.map((product) => (
        <Card style={{ width: "18rem" }} key={product.id}>
          <div className="flex justify-center">
            <Card.Img
              style={{ width: "100px", height: "130px" }}
              variant="top"
              src={product.image}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger" onClick={() => removeItem(product.id)}>
              Delete
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
  return <div>{card}</div>;
};

export default CartProducts;
