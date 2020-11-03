import Axios from 'axios'

export const planetApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=CQLh6ENShIob34R5UinrxiadXIbmTViGmdbBVgbN&query=',
  timeout: 10000
})