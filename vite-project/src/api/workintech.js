import axios from "axios";

const workintechApi = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
    timeout: 20000,
});

export default workintechApi;