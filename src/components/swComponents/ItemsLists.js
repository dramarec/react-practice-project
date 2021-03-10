// import React from 'react';
import SwapiService from '../../services/api';
import WithData from '../hocHelpers/WithData';
import ItemList from '../itemList/ItemList';
const swapiService = new SwapiService();

const { getAllPlanets, getAllStarships, getAllPeople } = swapiService;

const PersonList = WithData(ItemList, getAllPeople);
const PlanetList = WithData(ItemList, getAllPlanets);
const StarshipList = WithData(ItemList, getAllStarships);

export { PersonList, PlanetList, StarshipList };
