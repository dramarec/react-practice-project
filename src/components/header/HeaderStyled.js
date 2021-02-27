import styled from 'styled-components';

const HeaderStyled = styled.header`
    display: flex;
    margin-top: 0.5rem;
    padding-left: 10px;

    ul {
        list-style: none;
        display: flex;
        padding: 0.5rem 1rem;
        border-radius: 3px;
    }
    li {
        margin-right: 40px;
    }

    /* a:hover {
        background-color: #444;
    } */
`;
export default HeaderStyled;
