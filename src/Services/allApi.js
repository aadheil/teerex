import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonApi";
//  const APIKEY = "47de2b9e8b2462b53975d18185ac40bf"
export const getProducts = async()=>{
    return await commonAPI("GET",`${BASEURL}`,"","")
 }