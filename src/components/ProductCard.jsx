import { useDispatch, useSelector } from "react-redux"; //hook gives access to dispatch method which is used to call any functions defined in slice file
import { add, remove } from "../store/cartSlice";
// eslint-disable-next-line react/prop-types
import "./productCard.css";
import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types
export const ProductCard = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartState.cartList);
  // eslint-disable-next-line react/prop-types
  const { name, image, price } = product;

  useEffect(() => {
    const productInCart = cartList.find((current) => current.id === product.id);

    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, product.id]);
  return (
    <div className="card">
      <img src={image} alt={name} className="thumbnail" />
      <h4>{name}</h4>
      <div className="actionBtn">
        <span>${price}</span>
        {isInCart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))} className="add">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
