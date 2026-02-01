// fetch(`https://restcountries.com/v3.1/name/india`).then(function(response) {
//     console.log("response:", response);
//     return response.json();
// }).then((data) => console.log(data))

async function getCountries(keyword) {
    try {
        const rawResponse = await fetch(`https://restcountries.com/v3.1/name/${keyword}`);
        const response = await rawResponse.json();
        if(rawResponse.status === 404) {
            console.log("No Entries found for the searched Keyword");
            return [];
        }
        console.log("Data found");
        return response;
    } catch(e) {
        console.log("error: ", e);
    }
}
export default getCountries;
// getCountries("aodfbafbjnf");