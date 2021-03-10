import React, { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ItemListStyled from './ItemListStyled';
class ItemList extends Component {
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
        const { data } = this.props;

        const items = this.renderItems(data);
        return (
            <ItemListStyled>
                <ul className="item-list list-group">{items}</ul>
            </ItemListStyled>
        );
    }
}

const withData = View => {
    return class extends Component {
        state = {
            data: null,
        };
        componentDidMount() {
            const { getData } = this.props;
            getData().then(data => {
                this.setState({ data });
            });
        }
        render() {
            const { data } = this.state;
            if (!data) {
                return <Spinner />;
            }
            return <View {...this.props} data={data} />;
        }
    };
};
export default withData(ItemList);
