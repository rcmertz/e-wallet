import axios from 'axios'

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/all'
})

export const getMoedas = () => {
    return axios.get('https://economia.awesomeapi.com.br/json/all')
}

export default api;