import axios from 'axios'

export const youtubeApi = axios.create({
    baseURL: "http://localhost:8000"
})