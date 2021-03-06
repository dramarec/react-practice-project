import React, { Component } from 'react';
import SwapiService from '../../services/api';
import ErrorIndicator from '../error/ErrorIndicator';
import ItemList from '../itemList/ItemList';
import PersonDetalis from '../personDetalis/PersonDetalis';
import PeoplePageStyled from './PeoplePageStyled';
export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 1,
        hasError: false,
    };

    componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }
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
            />
        );
        const personDetails = (
            <PersonDetalis personId={this.state.selectedPerson} />
        );
        return (
            <PeoplePageStyled className="peoplePage">
                <div className="peopleList">{itemlist}</div>
                <div>{personDetails}</div>
            </PeoplePageStyled>
        );
    }
}
