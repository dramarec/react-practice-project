import React, { Component } from 'react';
import SwapiService from '../../services/api';
import ErrorButton from '../error/errorButton/ErrorButton';
import PersonDetailsStyled from './ItemDetailsStyled';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}: </span>
            <span>{item[field]}</span>
        </li>
    );
};
export { Record };
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
        const { name } = this.state.item;
        return (
            <>
                <PersonDetailsStyled className="person-details card">
                    <img className="item-image" alt="item" src={image} />
                    <div className="card-body">
                        <h4>{name}</h4>
                        <ul className="list-group list-group-flush">
                            {React.Children.map(this.props.children, child => {
                                return React.cloneElement(child, { item });
                            })}
                        </ul>
                    </div>
                    <ErrorButton />
                </PersonDetailsStyled>
            </>
        );
    }
}
