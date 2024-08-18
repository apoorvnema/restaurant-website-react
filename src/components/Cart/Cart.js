import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = (props) => {
  const CartCtx = useContext(CartContext);
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[...CartCtx.items].map((item) => (
        <li key={item.id}>
          <div>
            <span>{item.name}</span>
            <span>({item.quantity})</span>
          </div>
          <div className={classes.description}>{item.description}</div>
          <div className={classes.price}>${item.price}</div>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;