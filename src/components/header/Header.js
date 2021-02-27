/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import HeaderStyled from './HeaderStyled';

const Header = () => {
    return (
        <HeaderStyled>
            <h3>
                <a href="#">Star DB</a>
            </h3>
            <ul>
                <li>
                    <a href="#">People</a>
                </li>
                <li>
                    <a href="#">Planets</a>
                </li>
                <li>
                    <a href="#">Starships</a>
                </li>
            </ul>
        </HeaderStyled>
    );
};

export default Header;
