import axios from "axios";

export async function getData(service, url) {
  try {
    const response = (await axios.get(url)).data;
    return response;
  } catch (e) {
    throw new Error(`Problem getting ${service}`);
  }
}
