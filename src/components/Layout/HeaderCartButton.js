import React from 'react'
import cartIcon from '../../assets/cartIcon.svg'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
            <img style={{width:25}} src={cartIcon} alt="Cart" />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                0
            </span>
        </button>
    )
}

export default HeaderCartButton