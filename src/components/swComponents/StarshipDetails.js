import ErrorBoundry from '../error/erroBoundry/ErrorBoundry';
import withSwapiService from '../hocHelpers/withSwapiService';
import ItemDetails, { Record } from '../itemDetails/ItemDetails';

const StarshipDetails = ({ itemId, swapiService }) => {
    const { getStarship, getStarshipImage } = swapiService;
    return (
        <ErrorBoundry>
            <ItemDetails itemId={itemId} getData={getStarship} getImageUrl={getStarshipImage}>
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost " />
            </ItemDetails>
        </ErrorBoundry>
    );
};

export default withSwapiService(StarshipDetails);
