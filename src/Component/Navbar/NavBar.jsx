import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import styles from '../../Custom.module.css'

const Header = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "CONTACT", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-2xl w-full fixed top-0 left-0 z-[100]'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-semibold text-2xl cursor-pointer flex items-center gap-1'>
                    <h1 className={styles.textShadow}> <Link to="/">HUZAIFA</Link> </h1>
                </div>
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>

                    <li className='md:ml-8 md:my-0 my-7 font-semibold text-lg'>
                        <NavLink to='/' className={`text-gray-800 hover:text-blue-400 duration-500 ${styles.textShadow}`}>Home</NavLink>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold text-lg'>
                        <NavLink to='/projects' className={`text-gray-800 hover:text-blue-400 duration-500 ${styles.textShadow}`}>Projects</NavLink>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold text-lg'>
                        <NavLink to='about' className={`text-gray-800 hover:text-blue-400 duration-500 ${styles.textShadow}`}>About</NavLink>
                    </li>
                    <li className='md:ml-8 md:my-0 my-7 font-semibold text-lg'>
                        <NavLink to='contact' className={`text-gray-800 hover:text-blue-400 duration-500 ${styles.textShadow}`}>Contact</NavLink>
                    </li>
                </ul>
                {/* button */}
            </div>
        </div>
    );
};

export default Header;
