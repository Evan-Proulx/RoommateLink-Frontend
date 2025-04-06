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

export interface PropertyData {
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

export interface DealBreakers{
    has_pets: boolean;
    smokes: boolean;
    different_gender: boolean;
    different_diet: boolean;
    different_school: boolean;
    different_religion: boolean;
    has_kids: boolean;
    night_owl: boolean;
}


export interface UserProfile {
    compatibilityScore?: number;
    distance?: number;
    dealBreakers?: DealBreakers;
    personalData: PersonalData;
    profileData: ProfileData;
    propertyData: PropertyData;
}



////////////RATING DATA////////////

//Rating structure that is sent to the server
export interface Rating{
    reviewee_id?: number;
    respectful_rating: number;
    communicative_rating: number;
    friendly_rating: number;
    honest_rating: number;
    responsive_rating: number;
}
//Rating data retrieved from the server
export interface RatingScore{
    overallAverage: 0,
    singleTraitAverages: {
        averageCommunicative: 0,
        averageFriendly: 0,
        averageHonest: 0,
        averageRespectful: 0,
        averageResponsive: 0
    }
}

