import React, { Component } from 'react';
// import DummySwapiService from '../../services/dummy-swapi-service';
import SwapiService from '../../services/api';
import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import AppStyled from './AppStyled';
import Row from '../row/Row';
import ErrorBoundry from '../error/erroBoundry/ErrorBoundry';
import { SwapiServiceProvider } from '../swapiServiceContext/SwapiServiceContext';
import {
    PersonDetails,
    PersonList,
    PlanetDetails,
    PlanetList,
    StarshipDetails,
    StarshipList,
} from '../swComponents';

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

                        <Row
                            left={<PersonList />}
                            right={<PersonDetails itemId={10} />}
                        />
                        <Row
                            left={<PlanetList />}
                            right={<PlanetDetails itemId={11} />}
                        />
                        <Row
                            left={<StarshipList />}
                            right={<StarshipDetails itemId={11} />}
                        />
                    </AppStyled>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
