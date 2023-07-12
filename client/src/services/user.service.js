import {urls} from "../configs";
import {axiosService} from "./axios.service";

const userService = {
    registerUser: (user) => axiosService.post(urls.register, user)
}

export {userService}
