import React from 'react';
import classes from'./MealItemForm.module.css';
import Input from '../../UI/Input'
const MealItemForm = props =>{
    return (
        <form className={classes.form}>
            <Input lable="Amount" input={{
                id:'amount',                    //id,type,min,max,step, defaultValue..... these are all default properties 
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue : '1'
            }} />
            <button className='button'>Add</button>
        </form>
    )
}

export default MealItemForm;