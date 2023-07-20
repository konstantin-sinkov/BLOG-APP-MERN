import {urls} from "../configs";
import {axiosService} from "./axios.service";

const userService = {
    registerUser: (user) => axiosService.post(urls.register, user),
    loginUser: (user) => axiosService.post(urls.login, user, {withCredentials: true}),
    profile: () => axiosService.get(urls.profile, {withCredentials: true}),
    logout: () => axiosService.post(urls.logout, {withCredentials: true})
}

export {userService}
