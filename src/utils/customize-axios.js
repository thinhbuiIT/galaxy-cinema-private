import axios from "axios";

export const api = axios.create({
    baseURL: 'https://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/cinema',
    timeout: 1000,
    headers: { 'accept': 'application/json' }
});