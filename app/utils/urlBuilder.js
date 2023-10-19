import { BASE_URL } from "@/app/constants/constants.js";

export function urlBuilder(service, id, param) {
  let url = BASE_URL + service;
  if (id) {
    url += `/${id}`;
  }
  if (param) {
    url = url + "/?" + param;
  }
  return url;
}
