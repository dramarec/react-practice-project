// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./components/App";

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById("root")
// );

const getResource = async url => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url} + , received ${res.status}`);
    }
    const body = await res.json();
    return body;
};
getResource('https://swapi.dev/api/people/1/')
    .then(body => {
        console.log(body);
    })
    .catch(err => {
        console.error('Couldnt not fetch', err);
    });

// fetch('https://swapi.dev/api/people/1/')
//     .then(res => {
//         // console.log('Got response', res.status);
//         return res.json();
//     })
//     .then(body => {
//         console.log(body);
//     });
