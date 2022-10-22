// import React, {useContext} from "react";
// import CartIcon from "../Cart/CartIcon";
// import CartContext from "../../Store/cart-context";
// import classes from './HeaderCartButton.module.css';

// const HeaderCartButton = (props) =>{
    
// const cartCtx = useContext(CartContext);
// console.log(cartCtx.items);
// const nuberOfCartItem = cartCtx.items.reduce((curNumber, item) =>{                  // reduce take two parameters one is function and second is Starting value
//     return (curNumber + item.amount);
// } , 0);             
//     return(
//         <button className={classes.button} onClick={props.onClick}>
//             <span className={classes.icon}>
//                 <CartIcon />
//             </span>
//             <span>Your Cart</span>
//             <span className={classes.badge}>
//             {nuberOfCartItem}
//             </span>
//         </button>
//     )
// }

// export default HeaderCartButton;



import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from "../../Store/cart-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // Good practice to clean up any timers or side effects that might be ongoing
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;