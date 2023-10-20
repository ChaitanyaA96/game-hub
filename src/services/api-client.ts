import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key:"1902ba745d7f44b88894e3bb5351181e"
    }
})