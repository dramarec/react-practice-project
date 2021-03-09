import React, { Component } from 'react';
import SwapiService from '../../services/api';
import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';
import AppStyled from './AppStyled';
// import ItemList from '../itemList/ItemList';
// import sprite from '../../assets/symbol-defs.svg';
// import PeoplePage from '../peoplePage/PeoplePage';
import ItemDetails from '../itemDetails/ItemDetails';
import Row from '../row/Row';
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
        } = this.swapiService;
        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}
            />
        );
        const starshipDetails = (
            <ItemDetails
                itemId={9}
                getData={getStarship}
                getImageUrl={getStarshipImage}
            />
        );

        return (
            <ErrorBoundry>
                <AppStyled>
                    <Header togleShowPlanet={this.togleShowPlanet} />
                    {planet}
                    {/* <PeoplePage /> */}
                    {/* <div>
                        <ItemList
                            getData={this.swapiService.getAllPlanets}
                            onItemSelected={this.onPersonSelected}
                            renderItem={item => (
                                <span>
                                    <svg className="svg">
                                        <use href={sprite + '#group-2'} />
                                    </svg>
                                    {item.name}
                                </span>
                            )}
                        />
                        <ItemDetails itemId={this.state.selectedPerson} />
                    </div>

                    <div>
                        <ItemList
                            getData={this.swapiService.getAllStarships}
                            onItemSelected={this.onPersonSelected}
                            renderItem={item => item.name}
                        />
                        <ItemDetails itemId={this.state.selectedPerson} />
                    </div> */}
                    <Row left={personDetails} right={starshipDetails} />
                </AppStyled>
            </ErrorBoundry>
        );
    }
}
