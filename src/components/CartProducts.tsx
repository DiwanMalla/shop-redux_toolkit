import { useSelector } from "react-redux";

const CartProducts = () => {
  const productCart = useSelector((state) => state.cart);
  console.log(productCart);
  return <div>CartProducts</div>;
};

export default CartProducts;
