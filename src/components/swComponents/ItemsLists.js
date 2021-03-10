import React from 'react';
import SwapiService from '../../services/api';
import WithData from '../hocHelpers/WithData';
import ItemList from '../itemList/ItemList';
const swapiService = new SwapiService();

const { getAllPlanets, getAllStarships, getAllPeople } = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return props => {
        return <Wrapped {...props}>{fn}</Wrapped>;
    };
};
const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
    <span>
        {name}: ({model})
    </span>
);

const PersonList = WithData(
    withChildFunction(ItemList, renderName),
    getAllPeople,
);
const PlanetList = WithData(
    withChildFunction(ItemList, renderName),
    getAllPlanets,
);
const StarshipList = WithData(
    withChildFunction(ItemList, renderModelAndName),
    getAllStarships,
);

export { PersonList, PlanetList, StarshipList };
