import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './NavbarElem';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Café</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;
