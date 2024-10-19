import {ComputeTypes} from '../../components/ResourcePage/resouceCardModal';

const API_URL = process.env.NEXT_PUBLIC_BASE_URL_RESOURCE_API_URL;

function formatData(item) {
  return {
    resourceType: item["resourceType"],
    computeType: item["requiredSpecifications"]["compute"].hasOwnProperty('GPU') ? ComputeTypes.GPU : ComputeTypes.CPU,
    providerName: item["provider-name"],
    resourceId: item["resourceId"],
    occSpecName: item["occn-spec-name"] || null, // Assuming these fields may be missing
    occSpecVersion: item["occn-spec-version"] || null, // Same assumption as above
    storage: item["requiredSpecifications"]["storage"].hasOwnProperty('SSD') ? item["requiredSpecifications"]["storage"]["SSD"] : "0 GB",
    memory: item["requiredSpecifications"]["memory"]["RAM"] || "0 GB",
    compute: item["requiredSpecifications"]["compute"].hasOwnProperty('GPU') 
        ? item["requiredSpecifications"]["compute"]["GPU"] 
        : item["requiredSpecifications"]["compute"]["type"],
    endpoint: item["endpoint"],
    useCases: item["requiredSpecifications"]["usecases"],
    pythonVersion: item["other"]["pythonVersion"] || '-',
    xaas: {
      presence: item["xaas"]["presence"],
      templateName: item["xaas"]["template name"],
      version: item["xaas"]["version"]
    }
  };
}

function resourceFomat(item) {
  let data = formatData(item)
  return {
    ...data,
    providerName : data.providerName == 'vgyn' ? 'Vigyan Labs' : 'Jarvis Labs',

  }
}



export const fetchDataFromAPI = async () => {
  try {
    console.log(API_URL)
    const response = await fetch(API_URL); // Replace with your API URL
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json(); // Parse the response as JSON
    const data_format = result.map((item) => resourceFomat(item));
    return data_format;
  } catch (error) {
    throw error; // Re-throw the error for handling in the component
  }
};
