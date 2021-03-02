import React from 'react';
import Header from '../header/Header';
import ItemList from '../itemList/ItemList';
import PersonDetalis from '../personDetalis/PersonDetalis';
import RandomPlanet from '../randomPlanet/RandomPlanet';

export default function App() {
    return (
        <div className="App">
            <Header />
            <RandomPlanet />
            <ItemList />
            <PersonDetalis />
        </div>
    );
}
