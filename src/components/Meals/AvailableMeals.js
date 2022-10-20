import React from 'react';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id:'m1',
        name:'Sushi',
        description: 'Finest Fish and Veggies',
        price:22.99,
    },
    {
        id:'m2',
        name:'Schnitzel',
        description: 'A German Special',
        price:16.5,
    },
    {
        id:'m3',
        name:'Barbecue Burger',
        description: 'American, Raw, Meaty',
        price:12.99,
    },
    {
        id:'m4',
        name:'Green Bowl',
        description: 'Healthy and Green',
        price:18.99
    },
]


const AvailableMeals =() =>{
    const mealsList = DUMMY_MEALS.map(meal =><li>{meal.name}</li>)
    return(
        <section className={classes.meals}>
            <ul>
                {mealsList}
                
            </ul>
        </section>
    )
}

export default AvailableMeals;