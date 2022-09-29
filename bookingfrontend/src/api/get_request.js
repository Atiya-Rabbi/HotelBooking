import axios from 'axios';

export async function getDetails(dest_type,city_name){
    const url = `/api/hotel/?${dest_type}=${city_name}`
    try{
        const response = await axios.get(url)
        var details = response.data
        return details;
    }catch(err){
        console.log("Error in Fetching Details " + err.toString());
    }
}