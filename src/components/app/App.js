import React, { Component } from 'react';
import ErrorIndicator from '../error/ErrorIndicator';
import Header from '../header/Header';
import PeoplePage from '../peplePage/PeoplePage';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import AppStyled from './AppStyled';

export default class App extends Component {
    state = {
        showPlanet: true,
        hasError: false,
    };

    togleShowPlanet = () => {
        this.setState(state => ({ showPlanet: !state.showPlanet }));
    };

    componentDidCatch(error, info) {
        console.log('componentDidcatch');
        console.log('info :', info);
        console.log('error :', error);
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
                <PeoplePage />
                <PeoplePage />
            </AppStyled>
        );
    }
}
