
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
        element['usecases'].forEach((item) => usecasesSet.add(item.charAt(0).toUpperCase() + item.slice(1)))
    }); 
    return Array.from(usecasesSet);
}

export {getProvidersList, getUseCasesList}