import React from 'react';
import NavBar from './NavBar/NavBar';

const Header = (props) => {
    return(
        <NavBar user={props.user} handleLogout={props.handleLogout} />
    )
}

export default Header;