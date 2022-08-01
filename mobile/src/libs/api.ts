import axios from "axios";

export const api = axios.create({
    baseURL: 'http://ea1d-187-103-16-249.ngrok.io'
});