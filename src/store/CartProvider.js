import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = props => {
    const [items, setItems] = useState([]);
    const addItemToCartHandler = (item) => {
        setItems([...items, item])
    };
    const removeItemFromCartHandler = (id) => {
        setItems(items.filter(item => item.id !== id))
    };

    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>;
};

export default CartProvider;