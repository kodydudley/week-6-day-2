import {
  planetApi
} from "../Services/AxiosService"
import {
  AppState
} from "../AppState"

class PlanetService {
  async getPlanets(query) {
    try {
      const res = await planetApi.get(query)
      AppState.planet = res.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const planetService = new PlanetService()