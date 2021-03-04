import styled from 'styled-components';

const ErrorButtonStyled = styled.button`
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: tomato;
    border-radius: 5px;
    border: none;
    margin-left: 5px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    & svg {
        fill: white;
    }
    &:hover {
        background-color: #fff;
        & svg {
            fill: tomato;
        }
    }
`;
export default ErrorButtonStyled;
