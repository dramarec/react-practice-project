import React, { Component } from 'react';
import SwapiService from '../../services/api';
import Spinner from '../spinner/Spinner';
import ItemListStyled from './ItemListStyled';
export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: null,
    };
    componentDidMount() {
        this.swapiService.getAllPeaple().then(peopleList => {
            this.setState({ peopleList });
        });
    }

    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li
                    className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {name}
                </li>
            );
        });
    }

    render() {
        const { peopleList } = this.state;
        if (!peopleList) {
            return <Spinner />;
        }
        const items = this.renderItems(peopleList);
        return (
            <ItemListStyled>
                <ul className="item-list list-group">{items}</ul>
            </ItemListStyled>
        );
    }
}
