import React, { useRef, useState } from 'react';
import classes from'./MealItemForm.module.css';
import Input from '../../UI/Input'
const MealItemForm = props =>{
const [amountIsValid, setAmountIsVAlid] = useState(true)
const amountInputRef = useRef();

    const submitHandler = (event) =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;         // here output will always be string
        const enteredAmountNumber = +enteredAmount ;                // to convert that string to number

        if(enteredAmount.trim().length === 0 || enteredAmountNumber <1 || enteredAmountNumber > 5 ) {
            setAmountIsVAlid(false)
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
            ref ={amountInputRef}
            lable="Amount" 
            input={{
                id:'amount_'+ props.id,                    //id,type,min,max,step, defaultValue..... these are all default properties 
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue : '1'
            }} />
            <button className='button'>Add</button>
            {!amountIsValid && <p>Enter a Valid amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm;