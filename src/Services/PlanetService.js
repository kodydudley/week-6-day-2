import {
  planetApi
} from "../Services/AxiosService"
import {
  AppState
} from "../AppState"

class PlanetService {
  async getPlanets(query) {
    try {
      const res = await planetApi.get("/apod?api_key=CQLh6ENShIob34R5UinrxiadXIbmTViGmdbBVgbN&date=" + query)
      AppState.planet = res.data
      console.log(res.data);
    } catch (error) {
      console.error(error)
    }
  }
}

export const planetService = new PlanetService()