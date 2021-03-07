import React, { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ItemListStyled from './ItemListStyled';
export default class ItemList extends Component {
    state = {
        itemList: null,
    };
    componentDidMount() {
        const { getData } = this.props;
        getData().then(itemList => {
            this.setState({ itemList });
        });
    }

    renderItems(arr) {
        return arr.map(item => {
            const { id } = item;
            //!dont work children
            // const label = this.props.children(item);
            const label = this.props.renderItem(item);
            return (
                <li
                    className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {label}
                </li>
            );
        });
    }

    render() {
        const { itemList } = this.state;
        if (!itemList) {
            return <Spinner />;
        }
        const items = this.renderItems(itemList);
        return (
            <ItemListStyled>
                <ul className="item-list list-group">{items}</ul>
            </ItemListStyled>
        );
    }
}
