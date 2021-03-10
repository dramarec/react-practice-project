import React, { Component } from 'react';
import SwapiService from '../../services/api';
import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import AppStyled from './AppStyled';
import sprite from '../../assets/symbol-defs.svg';
import ItemDetails, { Record } from '../itemDetails/ItemDetails';
// import Row from '../row/Row';
import ErrorBoundry from '../erroBoundry/ErrorBoundry';
import {
    PersonList,
    PlanetList,
    StarshipList,
} from '../swComponents/ItemsLists';
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
} from '../swComponents/Details';

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        showPlanet: true,
    };

    togleShowPlanet = () => {
        this.setState(state => ({ showPlanet: !state.showPlanet }));
    };

    render() {
        const planet = this.state.showPlanet ? <RandomPlanet /> : null;

        const {
            getAllPlanets,
            getAllStarships,
            getAllPeople,
        } = this.swapiService;

        return (
            <ErrorBoundry>
                <AppStyled>
                    <Header togleShowPlanet={this.togleShowPlanet} />
                    {planet}
                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={11} />
                    <StarshipDetails itemId={11} />
                    <PersonList
                        getData={getAllPeople}
                        onItemSelected={() => {}}
                    >
                        {item => (
                            <span>
                                <svg className="svg">
                                    <use href={sprite + '#group-2'} />
                                </svg>
                                {item.name}
                            </span>
                        )}
                    </PersonList>
                    <PlanetList
                        getData={getAllPlanets}
                        onItemSelected={() => {}}
                    >
                        {({ name }) => <span>{name}</span>}
                    </PlanetList>

                    <StarshipList
                        getData={getAllStarships}
                        onItemSelected={() => {}}
                    >
                        {item => item.name}
                    </StarshipList>
                    {/* <Row left={personDetails} right={starshipDetails} /> */}
                </AppStyled>
            </ErrorBoundry>
        );
    }
}
