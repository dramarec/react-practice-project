// import React, { Component } from 'react';
// import SwapiService from '../../services/api';
// import ErrorBoundry from '../erroBoundry/ErrorBoundry';
// import ErrorIndicator from '../error/ErrorIndicator';
// import ItemDetails from '../itemDetails/ItemDetails';
// import ItemList from '../itemList/ItemList';
// import Row from '../row/Row';
// // import PeoplePageStyled from './PeoplePageStyled';

// export default class PeoplePage extends Component {
//     swapiService = new SwapiService();

//     state = {
//         selectedPerson: 13,
//     };

//     onPersonSelected = id => {
//         this.setState({
//             selectedPerson: id,
//         });
//     };

//     render() {
//         if (this.state.hasError) {
//             return <ErrorIndicator />;
//         }
//         const itemlist = (
//             <ItemList
//                 className="peopleList"
//                 getData={this.swapiService.getAllPeople}
//                 onItemSelected={this.onPersonSelected}
//                 renderItem={({ name, gender, birthYear }) =>
//                     `${name} (${gender}, ${birthYear})`
//                 }
//             />
//         );
//         const personDetails = (
//             <ErrorBoundry>
//                 <ItemDetails itemId={this.state.selectedPerson} />
//             </ErrorBoundry>
//         );
//         return (
//             <ErrorBoundry>
//                 <Row left={itemlist} right={personDetails} />
//             </ErrorBoundry>
//         );
//     }
// }
