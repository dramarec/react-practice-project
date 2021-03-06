import React, { Component } from 'react';
import SwapiService from '../../services/api';
import ErrorIndicator from '../error/ErrorIndicator';
import Spinner from '../spinner/Spinner';
import RandomPlanetStyled from './RandomPlanetStyled';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        // error: false,
    };

    componentDidMount() {
        // console.log('componentDidMount');
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
    }
    componentWillUnmount() {
        // console.log('componentWillUnmount');
        clearInterval(this.interval);
    }
    onPlanetLoaded = planet => {
        this.setState({ planet, loading: false, error: false });
    };
    onError = err => {
        this.setState({
            error: true,
            loading: false,
        });
    };
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };
    render() {
        // console.log('render');
        const { loading, planet, error } = this.state;
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;

        return (
            <RandomPlanetStyled>
                {errorMessage}
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
