import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({router, children}) => {
    const {id, name, path} = router;
    return (
        <div className='text-white p-2 hover:bg-slate-600 rounded-lg me-2'>
            <NavLink
            to={path} className={({isActive}) => isActive? 'bg-blue-900': ''}>{name}</NavLink>
        </div>
    );
};

export default ActiveLink;