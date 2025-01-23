import { useSelector, useDispatch } from "react-redux";
import { itemRemoved, itemDeleted, itemsAdded } from "../reducers/CartSlice";
import "../styles/Cart.css"; // Assuming you have some CSS for styling

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const incrementQuantity = (item) => {
    dispatch(itemsAdded(item));
  };

  const decrementQuantity = (item) => {
    dispatch(itemRemoved(item));
  };

  const deleteItem = (id) => {
    dispatch(itemDeleted(id));
  };

  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {items.length > 0 ? (
        <div>
          <ul className="cart-items">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} width="50" height="50" />
                <div className="item-details">
                  <div className="item-title">{item.title}</div>
                  <div className="item-price">Price: ${item.price}</div>
                  <div className="item-quantity">Quantity: {item.quantity}</div>
                </div>
                <div className="item-actions">
                  <button onClick={() => decrementQuantity(item)}>-</button>
                  <button onClick={() => incrementQuantity(item)}>+</button>
                  <button onClick={() => deleteItem(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total Amount: ${calculateTotalAmount().toFixed(2)}</strong>
          </div>
        </div>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
};

export default Cart;
