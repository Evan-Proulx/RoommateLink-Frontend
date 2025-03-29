export interface ProfileData {
    account_id: number;
    age: number;
    bio: string;
    first_name: string;
    last_name: string;
    profile_picture: string;
    introductory_video: string;
    created_at: string;
    updated_at: string;
}

export interface PersonalData {
    account_id: number;
    budget: number;
    city: string;
    province: string;
    longitude: number;
    latitude: number;
    radius: number;
    cleanliness: number;
    diet: string;
    gender: string;
    has_housing: boolean;
    has_pets: boolean;
    hobbies: any[];
    id: number;
    language: string;
    profession: string;
    religion: string;
    school: string;
    smokes: boolean;
    sociability: number;
    working_time_from: string;
    working_time_to: string;
    created_at: string;
    updated_at: string;
}

interface PropertyData {
    account_id: number;
    bathroom_count: number;
    bedroom_count: number;
    description: string;
    id: number;
    property_photos: any[];
    property_type: string;
    shared_kitchen: boolean;
    square_feet: number;
    created_at: string;
    updated_at: string;
}

export interface UserProfile {
    compatibilityScore?: number;
    personalData: PersonalData;
    profileData: ProfileData;
    propertyData: PropertyData;
}
