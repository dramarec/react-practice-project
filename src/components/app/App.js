import React, { Component } from 'react';
import SwapiService from '../../services/api';
import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import AppStyled from './AppStyled';
import Row from '../row/Row';
import ErrorBoundry from '../error/erroBoundry/ErrorBoundry';
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
import { SwapiServiceProvider } from '../swapiServiceContext/SwapiServiceContext';

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
                <SwapiServiceProvider value={this.swapiService}>
                    <AppStyled>
                        <Header togleShowPlanet={this.togleShowPlanet} />
                        {planet}

                        <Row
                            left={<PersonList />}
                            right={<PersonDetails itemId={11} />}
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
