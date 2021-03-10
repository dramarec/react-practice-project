import React, { Component } from 'react';
import SwapiService from '../../services/api';
import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import AppStyled from './AppStyled';
import sprite from '../../assets/symbol-defs.svg';
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

        return (
            <ErrorBoundry>
                <AppStyled>
                    <Header togleShowPlanet={this.togleShowPlanet} />
                    {planet}

                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={11} />
                    <StarshipDetails itemId={11} />

                    <PersonList onItemSelected={() => {}}>
                        {
                            <svg className="svg">
                                <use href={sprite + '#group-2'} />
                            </svg>
                        }
                    </PersonList>
                    <PlanetList onItemSelected={() => {}} />

                    <StarshipList onItemSelected={() => {}} />

                    {/* <Row left={personDetails} right={starshipDetails} /> */}
                </AppStyled>
            </ErrorBoundry>
        );
    }
}
