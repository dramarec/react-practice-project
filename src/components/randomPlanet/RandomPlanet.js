import React, { Component } from 'react';
import SwapiService from '../../services/api';
import Spinner from '../spinner/Spinner';
import RandomPlanetStyled from './RandomPlanetStyled';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
    };
    constructor() {
        super();
        this.updatePlanet();
    }
    onPlanetLoaded = planet => {
        this.setState({ planet, loading: false });
    };
    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
    }
    render() {
        const { loading, planet } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PlanetView planet={planet} /> : null;

        return (
            <RandomPlanetStyled>
                {spinner}
                {content}
            </RandomPlanetStyled>
        );
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <>
            <img
                className="planet-image"
                alt={name}
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population: </span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period: </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter: </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </>
    );
};
