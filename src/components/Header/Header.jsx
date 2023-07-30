import React, { useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    const routers = [
        {
            id: 1,
            path: '/',
            name: 'Home'
        },
        {
            id: 2,
            path: '/meals',
            name: 'Meals'
        },
        {
            id: 3,
            path: '/about',
            name: 'About'
        }
    ]
    return (
        <div className=' bg-black flex items-center p-4 relative'>
            <div className = {`md:flex me-auto absolute md:static bg-black rounded-lg p-5 md:p-0
            duration-500 ${open ? 'top-10' : '-top-96'}`}>
                {
                    routers.map(router => <ActiveLink 
                        key={router.id} 
                        router={router}></ActiveLink>)
                }
            </div>
            <div onClick={()=>setOpen(!open)} className='md:hidden'>
                {
                    open === true ?  <XMarkIcon  className="h-6 w-6 text-white" />  :
                    <Bars3Icon  className="h-6 w-6 text-white" />
                }
            </div>
        </div>
    );
};

export default Header;