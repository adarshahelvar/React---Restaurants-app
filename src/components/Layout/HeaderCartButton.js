import React, {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) =>{
    
const cartCtx = useContext(CartContext)
const nuberOfCartItem = cartCtx.items.reduce((currNumber, item) =>{
    return currNumber + item.amount;
} , 0);             // reduce take two parameters one is fumction and second is Starting value
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
            {nuberOfCartItem}
            </span>
        </button>
    )
}

export default HeaderCartButton;