import axios from "axios";

const instance = axios.create({ baseURL: "https://valoexplore-backend.onrender.com" });

export default instance;