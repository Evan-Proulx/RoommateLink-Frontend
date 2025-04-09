import { PersonalData, PropertyData } from "../../../ProfileData";
interface UpdatePropertyProps {
    property: PropertyData;
    newProperty?: boolean;
    personalData?: PersonalData | undefined;
    closeModal: () => void;
}
declare const UpdateProperty: ({ property, newProperty, personalData, closeModal }: UpdatePropertyProps) => import("react/jsx-runtime").JSX.Element;
export default UpdateProperty;
