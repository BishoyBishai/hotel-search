import { API_URLS } from "./../../common/constants/services";
import { getRequestHeader, checkStatus } from "../../common/helper/request";
export function getAllHotels() {
  return fetch(API_URLS.HOTEL.GET_ALL, {
    method: "GET",
    headers: getRequestHeader()
  })
    .then(checkStatus)
    .then(res => res.json());
}
