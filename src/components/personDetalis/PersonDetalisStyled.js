import styled from 'styled-components';

const PersonDetailsStyled = styled.div`
    /* .person-details { */
    display: flex;
    flex-direction: row;
    padding: 1rem;
    border: 1px solid #444;
    /* } */

    .person-image {
        width: 30%;
        height: 40%;
        border-radius: 10px;
    }

    .list-group-item {
        padding: 0.25rem;
    }

    .list-group-item .term {
        margin-right: 0.5rem;
    }
`;

export default PersonDetailsStyled;
