import React from 'react';
import ErrorIndicatorStyled from './ErrorIndicatorStyled';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <ErrorIndicatorStyled>
            <img src={icon} alt="error icon" />
            <span className="boom">BOOM!</span>
            <span>something has gone terribly wrong</span>
            <span>(but we already sent droids to fix it)</span>
        </ErrorIndicatorStyled>
    );
};

export default ErrorIndicator;
