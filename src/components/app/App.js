import React, { Component } from 'react';
import Header from '../header/Header';
import ItemList from '../itemList/ItemList';
import PersonDetalis from '../personDetalis/PersonDetalis';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import AppStyled from './AppStyled';

export default class App extends Component {
    state = {
        showPlanet: true,
        selectedPerson: null,
    };

    togleShowPlanet = () => {
        this.setState(state => ({ showPlanet: !state.showPlanet }));
    };

    onPersonSelected = id => {
        this.setState({
            selectedPerson: id,
        });
    };
    render() {
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
