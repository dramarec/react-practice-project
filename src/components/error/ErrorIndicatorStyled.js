import styled from 'styled-components';

const ErrorIndicatorStyled = styled.div`
    margin-top: 20%;
    margin-bottom: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #c78f22;

    .error-indicator img {
        margin-bottom: 1rem;
    }

    .error-indicator .boom {
        font-size: 1.7rem;
    }
`;
export default ErrorIndicatorStyled;
