import React from 'react'
import '../style/main.scss';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    return (
        <div className='navbar'>
            <img src={require('../assets/logo.svg')} alt='logo'></img>
            <ul>
                <NavLink exact={true} to='/' activeClassName='activeLink'>About me</NavLink>
                <NavLink to='/relationships' activeClassName='activeLink'>Relationships</NavLink>
                <NavLink to='/requirments' activeClassName='activeLink'>Requirments</NavLink>
                <NavLink to='/users' activeClassName='activeLink'>Users</NavLink>
                <NavLink to='/signUp' activeClassName='activeLink'>Sign Up</NavLink>
            </ul>
        </div>
    )
}

export default Navbar