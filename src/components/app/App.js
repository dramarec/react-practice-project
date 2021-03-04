import React, { Component } from 'react';
import ErrorIndicator from '../error/ErrorIndicator';
import Header from '../header/Header';
import ItemList from '../itemList/ItemList';
import PersonDetalis from '../personDetalis/PersonDetalis';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import AppStyled from './AppStyled';

export default class App extends Component {
    state = {
        showPlanet: true,
        selectedPerson: 1,
        hasError: false,
    };

    togleShowPlanet = () => {
        this.setState(state => ({ showPlanet: !state.showPlanet }));
    };

    onPersonSelected = id => {
        this.setState({
            selectedPerson: id,
        });
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

                <div className="d-flex">
                    <ItemList onItemSelected={this.onPersonSelected} />
                    <PersonDetalis personId={this.state.selectedPerson} />
                </div>
            </AppStyled>
        );
    }
}
