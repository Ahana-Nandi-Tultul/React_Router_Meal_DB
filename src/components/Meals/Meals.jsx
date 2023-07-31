import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    const meals = useLoaderData();
    
    return (
        <div>
            <h1 className='text-center text-4xl p-5'>Number of Meals: {meals.meals.length}</h1>
            <div className='grid md:grid-cols-3 p-10 gap-4'>
                {
                    meals.meals.map(meal => <Meal 
                        meal={meal} 
                        key={meal.idMeal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;