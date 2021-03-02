import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />, document.getElementById('root'));

// export default class SwapiService {
//     _apiBase = 'https://swapi.dev/api';

//     async getResource(url) {
//         const res = await fetch(`${this._apiBase}${url}`);

//         if (!res.ok) {
//             throw new Error(
//                 `Could not fetch ${url} + , received ${res.status}`,
//             );
//         }
//         return await res.json();
//     }
//     async getAllPeaple() {
//         const res = await this.getResource(`/people/`);
//         return res.results;
//     }
//     getPerson(id) {
//         return this.getResource(`/people/${id}/`);
//     }
//     async getAllPlanets() {
//         const res = await this.getResource(`/planets/`);
//         return res.results;
//     }
//     getPlanet(id) {
//         return this.getResource(`/planets/${id}/`);
//     }
//     async getAllStarships() {
//         const res = await this.getResource(`/starships/`);
//         return res.results;
//     }
//     getStarship(id) {
//         return this.getResource(`/starships/${id}/`);
//     }
// }
// const swapi = new SwapiService();

// swapi
//     .getAllPlanets()
//     .then(planet => {
//         console.log('planet :', planet);
//     })
//     .then(people => {
//         people.forEach(p => {
//             console.log(p.name);
//         });
//     })
//     .catch(error => {
//         console.log(error);
//     });
// swapi
//     .getPerson(1)
//     .then(person => {
//         console.log(person.name);
//     })
//     .catch(error => {
//         console.log(error);
//     });
