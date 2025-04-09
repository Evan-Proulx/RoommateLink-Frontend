import { UserProfile } from "../../../ProfileData";
interface AboutSectionProps {
    propertyImages: string[];
    myProfileDisplayed: boolean;
    interestedPeople?: UserProfile[];
}
declare function AboutSection({ propertyImages, myProfileDisplayed, interestedPeople }: AboutSectionProps): import("react/jsx-runtime").JSX.Element;
export default AboutSection;
