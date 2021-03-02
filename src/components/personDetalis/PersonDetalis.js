import React, { Component } from 'react';
import PersonDetailsStyled from './PersonDetalisStyled';

export default class PersonDetalis extends Component {
    render() {
        return (
            <PersonDetailsStyled>
                <img
                    alt="person"
                    src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
                />
                <div>
                    <h4>R2-D2</h4>
                    <ul>
                        <li>
                            <span></span>
                            <span></span>
                        </li>
                    </ul>
                </div>
            </PersonDetailsStyled>
        );
    }
}
