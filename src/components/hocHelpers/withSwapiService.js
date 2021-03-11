import React from 'react';
import { SwapiServiceConsumer } from '../swapiServiceContext/SwapiServiceContext';

const withSwapiService = Wrapped => {
    return props => {
        return (
            <SwapiServiceConsumer>
                {swapiService => {
                    return <Wrapped {...props} swapiService={swapiService} />;
                }}
            </SwapiServiceConsumer>
        );
    };
};

export default withSwapiService;

// import React from 'react';
// import { SwapiServiceConsumer } from '../swapiServiceContext/SwapiServiceContext';

// const withSwapiService = (Wrapped, mapMethodsToProps) => {
//     return props => {
//         return (
//             <SwapiServiceConsumer>
//                 {swapiService => {
//                     const serviceProps = mapMethodsToProps(swapiService);
//                     return <Wrapped {...props} {...serviceProps} />;
//                 }}
//             </SwapiServiceConsumer>
//         );
//     };
// };

// export default withSwapiService;
