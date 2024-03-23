import axios from "axios";
import api from "./api";
const fetcher =(url,data)=>api.post(url,data).then((res)=>res.data)

export default fetcher
