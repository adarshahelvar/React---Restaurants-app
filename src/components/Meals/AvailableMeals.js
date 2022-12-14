import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

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
    const mealsList = DUMMY_MEALS.map((meal) =>(
    <MealItem 
        id={meal.id}
        key={meal.id} 
        name={meal.name} 
        description={meal.description} 
        price = {meal.price}
    />
    ));
    return(
        <Card className= {classes.meals} >
            <ul>
                {mealsList}
                
            </ul>
        </Card>
    )
}

export default AvailableMeals;