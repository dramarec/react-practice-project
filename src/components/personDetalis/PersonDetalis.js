import React, { Component } from 'react';
import SwapiService from '../../services/api';
import PersonDetailsStyled from './PersonDetalisStyled';

export default class PersonDetalis extends Component {
    swapiService = new SwapiService();
    state = {
        person: null,
    };
    render() {
        return (
            <PersonDetailsStyled>
                <img
                    className="person-image"
                    alt="person"
                    src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
                />
                <div className="card-body">
                    <h4>R2-D2</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>1256</span>
                        </li>
                    </ul>
                </div>
            </PersonDetailsStyled>
        );
    }
}
