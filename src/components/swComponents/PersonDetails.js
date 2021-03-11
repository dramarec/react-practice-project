import withSwapiService from '../hocHelpers/withSwapiService';
import ItemDetails, { Record } from '../itemDetails/ItemDetails';

const PersonDetails = ({ itemId, swapiService }) => {
    const { getPerson, getPersonImage } = swapiService;
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}
        >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color " />
        </ItemDetails>
    );
};
export default withSwapiService(PersonDetails);
