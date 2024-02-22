import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import "./cartCard.css";
// eslint-disable-next-line react/prop-types
export const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types
  const { name, price, image } = product;
  return (
    <div className="tile" key={product.id}>
      <img src={image} alt={name} className="image" />
      <p>{name}</p>
      <span>${price}</span>
      <button onClick={() => dispatch(remove(product))} className="remove">
        Remove
      </button>
    </div>
  );
};
