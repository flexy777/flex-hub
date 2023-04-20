import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "137b724ca4344721a2002c25c3e223f7"
    }
})