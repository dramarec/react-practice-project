import styled from 'styled-components';

const RandomPlanetStyled = styled.div`
    padding: 1rem;
    border: 1px solid #444;
    margin-bottom: 20px;
    border-radius: 5px;
    flex-direction: inherit;

    .planet-image {
        width: 150px;
        height: 150px;
        border-radius: 10px;
        margin-right: 1rem;
    }

    .list-group {
        margin: 1rem 0 0 1rem;
    }

    .list-group-item {
        padding: 0.25rem;
    }

    .list-group-item .term {
        margin-right: 0.5rem;
    }
`;

export default RandomPlanetStyled;
