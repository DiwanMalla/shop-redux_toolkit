import { useGetProductsQuery } from "../Store/ProductApi/ProductApi";
import Loading from "./shared/Loading";
import { Card, Button } from "react-bootstrap";
const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return <Loading />;
  }
  const card = (
    <div className="flex flex-wrap gap-5">
      {data?.map(({ id, image, title, price }) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Go somewhere</Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
  return <div>{card}</div>;
};

export default Products;
