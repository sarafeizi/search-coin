import axios from "axios"
const baseurl="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
const getcoin=async()=>{
    const response=await axios.get(baseurl);
    return response.data;
}
export {getcoin};