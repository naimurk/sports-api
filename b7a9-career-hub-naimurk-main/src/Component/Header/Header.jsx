import React, { createContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { addToDb } from '../../localStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
export const Contex = createContext(0)
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [id, setid] = useState(0)

    const featureDe = (id) => {
        setid(id)

    }

    const addtoCart = id => {
        addToDb(id)
    }

    const contexValue = {
        id, featureDe, addtoCart
    }
    return (
        <Contex.Provider value={contexValue}>
            <div>
                <nav>
                    <div className='flex py-8  justify-between items-center'>
                        <div><h1 className='text-3xl font-bold'>ATS-job</h1></div>
                        <div className='md:hidden'>
                            <span>
                                {
                                    isOpen ?
                                        
                                         <FontAwesomeIcon onClick={() => setIsOpen(!isOpen)} className="h-6 w-6 text-blue-500" icon={faXmark} />
                                        : <FontAwesomeIcon onClick={() => setIsOpen(!isOpen)} className="h-6 w-6 text-blue-500" icon={faBars} />
                                }
                            </span>
                        </div>
                        <ul className={`md:flex gap-x-8 absolute duration-500 p-3 md:static ${isOpen ? 'top-16 right-3' : '-top-36 right-3'}`}>
                            <Link to='/'><li>Home</li></Link>
                            <Link><li>Statistics</li></Link>
                            <Link to="/applied_job" ><li>Applied job</li></Link>
                            <Link><li>Blog</li></Link>
                        </ul>
                        <button className='btn px-5 hidden lg:block py-3 rounded-md text-white bg-purple-500'>Start Applying</button>

                    </div>
                </nav>
                <Outlet></Outlet>
            </div>
        </Contex.Provider>
    );
};

export default Header;