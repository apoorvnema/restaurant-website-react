import React, { useContext } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../store/cart-context'

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemHandler = (event) => {
    event.preventDefault();
    console.log(props.item)
    const quantity = document.getElementById('amount' + props.id).value;
    cartCtx.addItem({...props.item, quantity:quantity});
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
      }} />
      <button onClick={addItemHandler}>+ Add</button>
    </form>
  )
}

export default MealItemForm