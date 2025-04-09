import { DiscoveryData } from "../API/Discovery";
interface DiscoveryModalProps {
    onSearch: (data: DiscoveryData) => void;
    parentData: DiscoveryData;
    closeModal: () => void;
}
declare const DiscoveryModal: ({ onSearch, parentData, closeModal }: DiscoveryModalProps) => import("react/jsx-runtime").JSX.Element;
export default DiscoveryModal;
