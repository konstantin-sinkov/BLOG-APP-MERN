import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({
    baseURL,
    headers: {
        'Content-type': 'application/json'
    }
});

export {axiosService};
