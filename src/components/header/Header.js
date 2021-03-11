/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ErrorButton from '../error/errorButton/ErrorButton';
import HeaderStyled from './HeaderStyled';

const Header = ({ togleShowPlanet }) => {
    return (
        <HeaderStyled>
            <h3 className="nav-logo">
                <a href="#">STAR WARS</a>
            </h3>
            <ul className="nav-list">
                <li className="nav-item">
                    <a className="nav-links" href="#">
                        People
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-links" href="#">
                        Planets
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-links" href="#">
                        Starships
                    </a>
                </li>
            </ul>
            <button
                onClick={togleShowPlanet}
                className="toggle-planet "
                type="button"
            >
                Show Planet
            </button>
            <ErrorButton />
        </HeaderStyled>
    );
};

export default Header;
