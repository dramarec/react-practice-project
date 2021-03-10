import React from 'react';
import SwapiService from '../../services/api';
import WithData from '../hocHelpers/WithData';
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
        <ItemListStyled>
            <ul className="item-list list-group">{items}</ul>
        </ItemListStyled>
    );
};

const { getAllPeople } = new SwapiService();
export default WithData(ItemList, getAllPeople);
