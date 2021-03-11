import ErrorBoundry from '../error/erroBoundry/ErrorBoundry';
import withSwapiService from '../hocHelpers/withSwapiService';
import ItemDetails, { Record } from '../itemDetails/ItemDetails';

const PlanetDetails = ({ itemId, swapiService }) => {
    const { getPlanet, getPlanetImage } = swapiService;
    return (
        <ErrorBoundry>
            <ItemDetails
                itemId={itemId}
                getData={getPlanet}
                getImageUrl={getPlanetImage}
            >
                <Record field="population" label="Population" />
                <Record field="rotationPeriod" label="Rotation Period:" />
                <Record field="diameter" label="Diameter: " />
            </ItemDetails>
        </ErrorBoundry>
    );
};

export default withSwapiService(PlanetDetails);
