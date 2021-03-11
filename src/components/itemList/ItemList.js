import React from 'react';
import ErrorBoundry from '../error/erroBoundry/ErrorBoundry';
import ItemListStyled from './ItemListStyled';

const ItemList = props => {
    const { data, onItemSelected, children: renderLabel } = props;

    const items = data.map(item => {
        const { id } = item;

        const label = renderLabel(item);

        return (
            <li
                className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}
            >
                {label}
            </li>
        );
    });

    return (
        <ErrorBoundry>
            <ItemListStyled>
                <ul className="item-list list-group">{items}</ul>
            </ItemListStyled>
        </ErrorBoundry>
    );
};

export default ItemList;
