import React from 'react';
import Header from '../header/Header';
import RandomPlanet from '../randomPlanet/RandomPlanet';

export default function App() {
    return (
        <div className="App">
            <Header />
            <h1>The Star Wars API</h1>
            <RandomPlanet />
        </div>
    );
}
