import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = (props) => {
  const ctxCartAdd = useContext(CartContext);
  const groupedItems = {};
  ctxCartAdd.items.map((item) => {
    if (!groupedItems[item.name]) {
      groupedItems[item.name] = { ...item, totalQuantity: 0 };
    }
    groupedItems[item.name].totalQuantity += Number(item.quantity);
    return item;
  });

  const cartItems = (
    <ul className={classes['cart-items']}>
      {Object.values(groupedItems).map((item) => (
        <div key={item.name}>
          <li>
            <h2 className={classes.name}>{item.name}</h2>
            <p>${item.price}</p>
            <div>
              <button onClick={() => increaseItemQt(item)}>+</button>
              {item.totalQuantity}
              <button onClick={() => decreaseItemQt(item)}>-</button>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );

  let totalAmount = 0;
  ctxCartAdd.items.map((item) => {
    totalAmount += item.quantity * item.price;
    return item;
  });

  const increaseItemQt = (item) => {
    ctxCartAdd.addItem({ ...item, quantity: 1 });
  };

  const decreaseItemQt = (item) => {
    if (item.totalQuantity === 1) {
      ctxCartAdd.removeItem(item.id);
    } else {
      ctxCartAdd.addItem({ ...item, quantity: -1 });
    }
  };

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;