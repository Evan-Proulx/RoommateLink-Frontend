import * as React from 'react';
import { UserProfile } from "../../ProfileData";
interface ListingCardProps {
    user: UserProfile;
    onSetListingToggle: any;
}
declare const ListingCard: React.FC<ListingCardProps>;
export default ListingCard;
