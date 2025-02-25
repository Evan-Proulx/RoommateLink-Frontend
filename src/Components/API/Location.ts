// Used to convert the province code to a string
const provinceCodes= {
    "10": "Newfoundland and Labrador",
    "11": "Prince Edward Island",
    "12": "Nova Scotia",
    "13": "New Brunswick",
    "24": "Quebec",
    "35": "Ontario",
    "46": "Manitoba",
    "47": "Saskatchewan",
    "48": "Alberta",
    "59": "British Columbia",
    "60": "Yukon",
    "61": "Northwest Territories",
    "62": "Nunavut"
};

export const getLocation = async (lat: number, lon: number)=> {
    // const radiusInKM = Math.round(radius/1000)
    const url = `https://geogratis.gc.ca/services/geoname/en/geonames?lat=${lat}&lon=${lon}&sort-field=distance`
    console.log(url)
    try{
        const response = await fetch(url)
        const data = await response.json();
        const location = data.features[0].properties.location;
        const town = data.features[0].properties.name;
        const provinceCode = data.features[0].properties.province;

        const province = provinceCodes[provinceCode] || "Unknown";

        return {town, location, province}
    }catch(err){
        console.log(err);
    }
}
