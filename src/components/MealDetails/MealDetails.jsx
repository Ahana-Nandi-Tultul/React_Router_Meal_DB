import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MealDetails = () => {
    const navigate = useNavigate();
    let mealDetails = useLoaderData();

    mealDetails = mealDetails.meals[0];
    const {idMeal, strMeal, strMealThumb, strInstructions, strTags} = mealDetails;
    let tags = []
    if(strTags !== null){

        tags = strTags.split(',');
    }
    else{
        tags = ['No tags']
    }
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div className='border border-black rounded-lg p-4'>
            <h2 className='text-2xl font-semibold'>{strMeal}</h2>
            <img className='rounded-lg my-3' height={'300px'} width={'300px'} src={strMealThumb} alt="" />
            <p>{strInstructions}</p>
            <p className='text-xl' >Tags: </p>
            <ul className='mb-4'>
                {
                    tags.map((tag, index) => <li key={index}>{tag}</li>)
                }
            </ul>
            <div>
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    );
};

export default MealDetails;