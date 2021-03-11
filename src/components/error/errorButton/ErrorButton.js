import React, { Component } from 'react';
import sprite from '../../../assets/symbol-defs.svg';
import ErrorButtonStyled from './ErrorButtonStyled';

export default class ErrorButton extends Component {
    state = {
        renderError: false,
    };
    render() {
        // console.log('render');
        if (this.state.renderError) {
            this.foo.bar = 0;
        }
        return (
            <ErrorButtonStyled
                className="error-button"
                onClick={() => this.setState({ renderError: true })}
            >
                <svg width="30px" height="30px">
                    <use href={sprite + '#icon-warning'} />
                </svg>
            </ErrorButtonStyled>
        );
    }
}
