import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function Navbar() {
    // Show mobile button 
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true);
        }

    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    // end mobile button


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <span className='CAT'>Catarina Gonçalves</span>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Arts' className='nav-links' onClick={closeMobileMenu}>
                                Arts
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/architecture' className='nav-links' onClick={closeMobileMenu}>
                                Architecture
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>
                        Order
                        </Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
