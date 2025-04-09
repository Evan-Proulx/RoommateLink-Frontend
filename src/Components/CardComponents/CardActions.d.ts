interface CardActionsProps {
    userId: number;
    hasHousing: boolean;
    profileView: boolean;
    onSetListingToggle?: (userId: number) => void;
    bookmarkDisplay?: boolean;
    onBookmarkToggle?: (bookmarked: boolean) => void;
}
declare const CardActions: ({ userId, hasHousing, profileView, onSetListingToggle, bookmarkDisplay, onBookmarkToggle }: CardActionsProps) => import("react/jsx-runtime").JSX.Element;
export default CardActions;
