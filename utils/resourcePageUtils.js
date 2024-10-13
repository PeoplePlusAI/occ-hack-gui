
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

    if(filterData["computeSelection"] !=null && filterData["computeSelection"] != data["computeType"] ) return false;

    if(filterData["minStorage"] > Number(data["storage"].slice(0,-2))) return false;

    if(filterData["providers"].length != 0 && !filterData["providers"].includes(data["providerName"])) return false;

    // and filter
    if(filterData["useCases"].length != 0 &&  !filterData["useCases"].every(element => data["useCases"].includes(element.toLowerCase()))) return false;
    
    // or filter
    // if(filterData["useCases"].length != 0 &&  !filterData["useCases"].map(v => v.toLowerCase()).every(element => data["useCases"].includes(element))) return false;

    return true;
    
}

export {getProvidersList, getUseCasesList, getMaximumStorage, applyFilter}