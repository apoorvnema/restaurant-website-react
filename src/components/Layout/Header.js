import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {

  return <>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt='Meals' />
    </div>
  </>
};

export default Header;