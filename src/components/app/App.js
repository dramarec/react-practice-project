import React, { Component } from 'react';
// import DummySwapiService from '../../services/dummy-swapi-service';
import SwapiService from '../../services/api';
import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import AppStyled from './AppStyled';
import ErrorBoundry from '../error/erroBoundry/ErrorBoundry';
import { SwapiServiceProvider } from '../swapiServiceContext/SwapiServiceContext';
import PeoplePage from '../pages/PeoplePage';
import PlanetsPage from '../pages/PlanetsPage';
import StarshipsPage from '../pages/StarshipsPage';

export default class App extends Component {
    // swapiService = new DummySwapiService();
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
                <SwapiServiceProvider value={this.swapiService}>
                    <AppStyled>
                        <Header togleShowPlanet={this.togleShowPlanet} />
                        {planet}

                        <PeoplePage />
                        <PlanetsPage />
                        <StarshipsPage />
                    </AppStyled>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
