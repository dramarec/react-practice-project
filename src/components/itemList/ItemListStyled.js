import styled from 'styled-components';

const ItemListStyled = styled.div`
    margin-bottom: 1rem;
    max-width: 700px;

    .list-group-item {
        cursor: pointer;
    }

    .list-group-item:hover {
        background-color: #444;
    }
`;

export default ItemListStyled;
