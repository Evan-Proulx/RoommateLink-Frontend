import * as React from 'react';
import { UserProfile } from "../../ProfileData";
interface BookmarkedUserCardProps {
    user: UserProfile;
    onUnbookmark: (userId: number | undefined) => void;
}
declare const BookmarkedUserCard: React.FC<BookmarkedUserCardProps>;
export default BookmarkedUserCard;
