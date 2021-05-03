import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import StarshipDetails from '../swComponents/StarshipDetails';

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
                    <BrowserRouter>
                        <AppStyled>
                            <Header togleShowPlanet={this.togleShowPlanet} />
                            {planet}
                            <Switch>
                                <Route exact path="/" render={() => <h2> Welcome to StaerDB</h2>} />
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets/:id?" component={PlanetsPage} />
                                <Route exact path="/starships" component={StarshipsPage} />
                                <Route
                                    path="/starships/:id"
                                    render={({ match }) => {
                                        const { id } = match.params;
                                        return <StarshipDetails itemId={id} />;
                                    }}
                                />
                                <Route render={() => <h2>Page not found</h2>} />
                            </Switch>
                        </AppStyled>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
