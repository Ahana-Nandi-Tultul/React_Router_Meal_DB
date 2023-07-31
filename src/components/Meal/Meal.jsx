import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Meal = ({meal}) => {
    const navigate = useNavigate();
    const {idMeal, strMeal, strMealThumb, strInstructions, strTags} = meal;
    let tags = []
    if(strTags !== null){

        tags = strTags.split(',');
    }
    else{
        tags = ['No tags']
    }
    const handleMealDetails = () => {
        navigate(`/meal/${idMeal}`);
    }
    return (
        <div className='border border-black rounded-lg p-4'>
            <h2 className='text-2xl font-semibold'>{strMeal}</h2>
            <img className='rounded-lg my-3' src={strMealThumb} alt="" />
            <p className='text-xl' >Tags: </p>
            <ul className='text-center mb-4'>
                {
                    tags.map((tag, index) => <li key={index}>{tag}</li>)
                }
            </ul>
            {/* <Link to={`/meal/${idMeal}`} className='bg-slate-800 text-white p-5 rounded-lg'>Show Details</Link> */}
            {/* <Link to={`/meal/${idMeal}`} className='bg-slate-800 text-white p-5 rounded-lg'>
                <button>Show Details</button></Link> */}
            <button className='bg-slate-800 text-white p-5 rounded-lg'
             onClick={handleMealDetails}>Show Details (Use Navigate)</button>
        </div>
    );
};

export default Meal;