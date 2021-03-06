import React, { Component } from 'react';
import SwapiService from '../../services/api';
import ErrorIndicator from '../error/ErrorIndicator';
import Header from '../header/Header';
import PeoplePage from '../peplePage/PeoplePage';
import ItemList from '../itemList/ItemList';
import PersonDetalis from '../personDetalis/PersonDetalis';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import AppStyled from './AppStyled';

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        showPlanet: true,
        hasError: false,
    };

    togleShowPlanet = () => {
        this.setState(state => ({ showPlanet: !state.showPlanet }));
    };

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const planet = this.state.showPlanet ? <RandomPlanet /> : null;

        return (
            <AppStyled>
                <Header togleShowPlanet={this.togleShowPlanet} />
                {planet}

                <PeoplePage />

                <ItemList
                    getData={this.swapiService.getAllPlanets}
                    onItemSelected={this.onPersonSelected}
                />
                <PersonDetalis personId={this.state.selectedPerson} />
            </AppStyled>
        );
    }
}
