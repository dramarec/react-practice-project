import React, { Component } from 'react';
import SwapiService from '../../services/api';
import ErrorButton from '../errorButton/ErrorButton';
import PersonDetailsStyled from './ItemDetailsStyled';

export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        item: null,
        image: null,
    };
    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId).then(item => {
            this.setState({ item, image: getImageUrl(item) });
        });
    }
    render() {
        const { item, image } = this.state;
        if (!item) {
            return <span>Select a person from a list</span>;
        }
        const {
            // id,
            name,
            gender,
            height,
            birthYear,
            eyeColor,
        } = this.state.item;
        return (
            // console.log('person :', this.state.person);
            <PersonDetailsStyled className="person-details card">
                <img className="person-image" alt="person" src={image} />
                <div className="card-body">
                    <h4>{name}</h4>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender: </span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Height: </span>
                            <span>{height}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year: </span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color: </span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
                <ErrorButton />
            </PersonDetailsStyled>
        );
    }
}
