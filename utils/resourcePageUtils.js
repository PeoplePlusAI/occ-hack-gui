
const getProvidersList = (data) => {
    var ProviderSet = new Set();
    data.forEach(element => {
        ProviderSet.add(element['providerName'])
    }); 
    return Array.from(ProviderSet);
}

const getUseCasesList = (data) => {
    var usecasesSet = new Set();
    data.forEach(element => {
        element['useCases'].forEach((item) => usecasesSet.add(item.charAt(0).toUpperCase() + item.slice(1)))
    }); 
    return Array.from(usecasesSet);
}

const getMaximumStorage = (data) => {
    var maximum = 0;
    data.forEach(element => {
        maximum = Number(element["storage"].slice(0,-2)) > maximum ? Number(element["storage"].slice(0,-2)) : maximum;
    }); 
    return maximum;
}

const applyFilter = (data, filterData) => {

    if(!searchInJson(data, filterData["search"], null)) return false;

    if(filterData["computeSelection"] !=null && filterData["computeSelection"] != data["computeType"] ) return false;

    if(filterData["minStorage"] > Number(data["storage"].slice(0,-2))) return false;

    if(filterData["providers"].length != 0 && !filterData["providers"].includes(data["providerName"])) return false;

    // "and" filter for useCases
    if(filterData["useCases"].length != 0 &&  !filterData["useCases"].every(element => data["useCases"].includes(element.toLowerCase()))) return false;
    
    // "or" filter for useCases
    // if(filterData["useCases"].length != 0 &&  !filterData["useCases"].map(v => v.toLowerCase()).every(element => data["useCases"].includes(element))) return false;

    return true;
    
}

// Third parameter is for searching in specific keus of json.
function searchInJson(jsonObj, searchText, searchSpecificKeys = null) {
    // Split the search text into individual words
    const searchWords = searchText.toLowerCase().split(/\s+/);

    // Helper function to search for a word in a value (handles arrays, objects, and primitive values)
    const searchValue = (value, word) => {
        if (typeof value === 'object' && value !== null) {
            return searchInJson(value, word); // Recursively search in nested objects/arrays
        } else if (typeof value === 'string') {
            return value.toLowerCase().includes(word); // Check if word is in string
        }
        return false; // Ignore non-string, non-object values
    };

    // Convert the JSON object to an array of key-value pairs if searching specific keys
    const entries = searchSpecificKeys 
        ? Object.entries(jsonObj).filter(([key]) => searchSpecificKeys.includes(key))
        : Object.entries(jsonObj);

    // Check if all search words are present across the values
    return searchWords.every(word => 
        entries.some(([key, value]) => searchValue(value, word))
    );
}


export {getProvidersList, getUseCasesList, getMaximumStorage, applyFilter}