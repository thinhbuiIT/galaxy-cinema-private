import { api } from '../utils/customize-axios'

export const fetchCinemas = async () => {
    return await api.get('/cinemas')
}

export const fetchSearchCinemas = async (key) => {
    return await api.get(`/cinemas/${key}`)
}
