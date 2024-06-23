import { useDispatch } from "react-redux";
import { useGetProductsQuery } from "../Store/ProductApi/ProductApi";
import Loading from "./shared/Loading";
import { Card, Button } from "react-bootstrap";
import { addItem } from "../Store/CartSlice";
const Products = () => {
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItem(item));
  };
  const { data, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return <Loading />;
  }
  const card = (
    <div className="flex flex-wrap gap-5 text-center">
      {data?.map((product) => (
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
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
  return <div>{card}</div>;
};

export default Products;
