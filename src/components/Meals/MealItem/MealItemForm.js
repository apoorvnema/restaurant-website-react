import React, { useContext, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../store/cart-context'

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);
  const cartCtx = useContext(CartContext);
  const addItemHandler = (event) => {
    event.preventDefault();
    const quantity = document.getElementById('amount' + props.id).value;
    cartCtx.addItem({ ...props.item, quantity: quantity });
  }

  return (
    <form className={classes.form}>
      <Input label="Amount" input={{
        id: 'amount' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }}
        onChange={(event) => setAmount(event.target.value)}
        value={amount}
      />
      <button onClick={addItemHandler}>+ Add</button>
    </form>
  )
}

export default MealItemForm