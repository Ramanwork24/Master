import { commonrequest } from "./apiCall";
import { backend_url } from "./helper";

export const registerfunction = async(username, email, password) => {
    try {
        const response = await commonrequest("POST", `${backend_url}/user/register`, {username: username, email: email, password:password});
        return response.data;
    }
    catch(error) {
        throw error;
    }
}

export const phoneValidation = async(username) => {
    try {
        const response = await commonrequest("POST", `${backend_url}/user/login`, {username: username});
        return response.data;
    }
    catch(error) {
        throw error;
    }
}