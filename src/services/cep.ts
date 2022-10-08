import axios from 'axios'

export const cepApi = axios.create({
  baseURL: 'http://viacep.com.br/ws',
})
