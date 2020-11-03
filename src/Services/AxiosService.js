import Axios from 'axios'

export const planetApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  timeout: 10000
})