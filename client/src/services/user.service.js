import {urls} from "../configs";
import {axiosService} from "./axios.service";

const userService = {
    registerUser: (user) => axiosService.post(urls.register, user),
    loginUser: (user) => axiosService.post(urls.login, user, {withCredentials: true})
}

export {userService}
