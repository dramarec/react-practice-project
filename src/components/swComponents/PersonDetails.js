import ErrorBoundry from '../error/erroBoundry/ErrorBoundry';
import withSwapiService from '../hocHelpers/withSwapiService';
import ItemDetails, { Record } from '../itemDetails/ItemDetails';

const PersonDetails = ({ itemId, swapiService }) => {
    const { getPerson, getPersonImage } = swapiService;
    return (
        <ErrorBoundry>
            <ItemDetails
                itemId={itemId}
                getData={getPerson}
                getImageUrl={getPersonImage}
            >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color " />
            </ItemDetails>
        </ErrorBoundry>
    );
};
export default withSwapiService(PersonDetails);

// import React from 'react';
// import withSwapiService from '../hocHelpers/withSwapiService';
// import ItemDetails, { Record } from '../itemDetails/ItemDetails';

// const PersonDetails = props => {
//     return (
//         <ItemDetails {...props}>
//             <Record field="gender" label="Gender" />
//             <Record field="eyeColor" label="Eye Color " />
//         </ItemDetails>
//     );
// };
// const mapMethodsToProps = swapiService => {
//     return {
//         getData: swapiService.getPerson,
//         getImageUrl: swapiService.getPersonImage,
//     };
// };
// export default withSwapiService(PersonDetails, mapMethodsToProps);
