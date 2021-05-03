import React from 'react';
import ErrorButton from '../error/errorButton/ErrorButton';
import HeaderStyled from './HeaderStyled';
import { NavLink } from 'react-router-dom';

const Header = ({ togleShowPlanet }) => {
    return (
        <HeaderStyled>
            <h3 className="nav-logo">
                <NavLink to="/">STAR WARS</NavLink>
            </h3>
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink className="nav-links" to="/people/">
                        People
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-links" to="/planets/">
                        Planets
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-links" to="/starships/">
                        Starships
                    </NavLink>
                </li>
            </ul>
            <button onClick={togleShowPlanet} className="toggle-planet " type="button">
                Show Planet
            </button>
            <ErrorButton />
        </HeaderStyled>
    );
};

export default Header;
