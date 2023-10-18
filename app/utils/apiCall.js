import axios from "axios";

export async function getData(resource, url, page = null) {
  try {
    if (page) {
      url = url + "/?" + page;
    }
    const response = (await axios.get(url)).data;
    return response;
  } catch (e) {
    throw new Error(`Problem getting ${resource}`);
  }
}
