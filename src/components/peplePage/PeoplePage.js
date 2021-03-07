import React, { Component } from 'react';
import SwapiService from '../../services/api';
import ErrorBoundry from '../erroBoundry/ErrorBoundry';
import ErrorIndicator from '../error/ErrorIndicator';
import ItemList from '../itemList/ItemList';
import PersonDetalis from '../personDetalis/PersonDetalis';
import PeoplePageStyled from './PeoplePageStyled';

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 1,
    };

    onPersonSelected = id => {
        this.setState({
            selectedPerson: id,
        });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        const itemlist = (
            <ItemList
                className="peopleList"
                getData={this.swapiService.getAllPeople}
                onItemSelected={this.onPersonSelected}
                renderItem={({ name, gender, birthYear }) =>
                    `${name} (${gender}, ${birthYear})`
                }
            >
                {/* {i => `${i.name} ( ${i.birthYear})`} */}
            </ItemList>
        );
        const personDetails = (
            <ErrorBoundry>
                <PersonDetalis personId={this.state.selectedPerson} />
            </ErrorBoundry>
        );
        return (
            <ErrorBoundry>
                <PeoplePageStyled className="peoplePage">
                    <div className="peopleList">{itemlist}</div>
                    <div>{personDetails}</div>
                </PeoplePageStyled>
            </ErrorBoundry>
        );
    }
}
