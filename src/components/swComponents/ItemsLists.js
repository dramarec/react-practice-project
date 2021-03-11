import React from 'react';
import SwapiService from '../../services/api';
import withData from '../hocHelpers/withData';
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

const PersonList = withData(
    withChildFunction(ItemList, renderName),
    getAllPeople,
);
const PlanetList = withData(
    withChildFunction(ItemList, renderName),
    getAllPlanets,
);
const StarshipList = withData(
    withChildFunction(ItemList, renderModelAndName),
    getAllStarships,
);

export { PersonList, PlanetList, StarshipList };
