import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params: {
    key: 'b15c19e6ec1649df94d77b8f699fe0e1'
    }

})