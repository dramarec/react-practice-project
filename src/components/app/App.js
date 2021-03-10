import React, { Component } from 'react';
import SwapiService from '../../services/api';
import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import AppStyled from './AppStyled';
import ItemList from '../itemList/ItemList';
import sprite from '../../assets/symbol-defs.svg';
import ItemDetails, { Record } from '../itemDetails/ItemDetails';
// import Row from '../row/Row';
import ErrorBoundry from '../erroBoundry/ErrorBoundry';

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
            getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPlanets,
            getAllStarships,
            getAllPeople,
        } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}
            >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color " />
            </ItemDetails>
        );
        const starshipDetails = (
            <ItemDetails
                itemId={9}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            >
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost " />
            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <AppStyled>
                    <Header togleShowPlanet={this.togleShowPlanet} />
                    {planet}
                    {/* <PeoplePage /> */}
                    <ItemList getData={getAllPeople} onItemSelected={() => {}}>
                        {item => (
                            <span>
                                <svg className="svg">
                                    <use href={sprite + '#group-2'} />
                                </svg>
                                {item.name}
                            </span>
                        )}
                    </ItemList>
                    <ItemList getData={getAllPlanets} onItemSelected={() => {}}>
                        {({ name }) => <span>{name}</span>}
                    </ItemList>

                    <ItemList
                        getData={getAllStarships}
                        onItemSelected={() => {}}
                    >
                        {item => item.name}
                    </ItemList>
                    {/* <Row left={personDetails} right={starshipDetails} /> */}
                </AppStyled>
            </ErrorBoundry>
        );
    }
}
