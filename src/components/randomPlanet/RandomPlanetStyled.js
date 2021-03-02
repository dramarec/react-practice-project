import styled from 'styled-components';

const RandomPlanetStyled = styled.div`
    display: flex;
    padding: 1rem;
    outline: 1px solid #ccc;
    width: 700px;
    margin-right: auto;
    margin-left: auto;
    .random-planet .planet-image {
        width: 150px;
        height: 150px;
        border-radius: 10px;
        margin-right: 1rem;
    }

    .random-planet .list-group {
        margin: 1rem 0 0 1rem;
    }

    .random-planet .list-group-item {
        padding: 0.25rem;
    }

    .random-planet .list-group-item .term {
        margin-right: 0.5rem;
    }
`;

export default RandomPlanetStyled;
