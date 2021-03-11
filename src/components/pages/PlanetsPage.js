import React, { Component } from 'react';
import Row from '../row/Row';
import { PlanetDetails, PlanetList } from '../swComponents';

export default class PlanetsPage extends Component {
    state = {
        selectedItem: null,
    };
    onItemSelected = selectedItem => {
        this.setState({ selectedItem });
    };
    render() {
        const { selectedItem } = this.state;
        return (
            <Row
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails itemId={selectedItem} />}
            />
        );
    }
}
