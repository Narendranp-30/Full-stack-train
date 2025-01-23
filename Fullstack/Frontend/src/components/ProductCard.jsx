import { useDispatch } from 'react-redux';
import { itemsAdded } from '../reducers/CartSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Productcard.css';

const ProductCard = (props) => {
  const { id, title, description, price, image } = props.product || {};  
  const dispatch = useDispatch();

  const addItems = () => {
    dispatch(itemsAdded(props.product));
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="about-product">
        <div className="price">Price: ${price}</div>
        <div className="title">{title}</div>
        <div className="description">Description: {description}</div>
      </div>
      <button className="CartButton" onClick={addItems}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
