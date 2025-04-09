export interface DiscoveryData {
    latitude?: number;
    longitude?: number;
    budget: number;
    gender: string;
    religion: string;
    diet: string;
    school: string;
    pet_free: boolean;
    smokes: boolean;
    verified: boolean;
    has_housing: boolean;
}
export declare const discoverySearch: (parameters: any) => Promise<any>;
