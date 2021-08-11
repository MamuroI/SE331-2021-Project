import axios from "axios";

const client = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL,
    withCredentials: false,
    headers: {
        "content-type": "application/json"
    }
})

export default {
    getPatients(){
        return client.get(`/patients`)
    }
}