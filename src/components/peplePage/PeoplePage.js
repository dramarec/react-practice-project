import React, { Component } from 'react';
import ErrorIndicator from '../error/ErrorIndicator';
import ItemList from '../itemList/ItemList';
import PersonDetalis from '../personDetalis/PersonDetalis';
import PeoplePageStyled from './PeoplePageStyled';
export default class PeoplePage extends Component {
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
        return (
            <PeoplePageStyled>
                <ItemList onItemSelected={this.onPersonSelected} />
                <PersonDetalis personId={this.state.selectedPerson} />
            </PeoplePageStyled>
        );
    }
}
