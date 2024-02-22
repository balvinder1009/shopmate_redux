import { CartCard } from "../components/CartCard";
import { useSelector } from "react-redux"; //hook used to access states defined

export const Cart = () => {
  const products = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);

  return (
    <main>
      <h2>
        Cart items: {products.length} / ${total}
      </h2>
      {products.map((product) => (
        <CartCard product={product} />
      ))}
    </main>
  );
};
