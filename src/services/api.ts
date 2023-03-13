import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

export default class PokemonAPIService {
  private axiosInstance: AxiosInstance

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://pokeapi.co/api/v2'
    })
  }

  private async axiosCall<T>(config: AxiosRequestConfig) {
    try {
      const { data, headers } = await this.axiosInstance.request<T>(config)
      return [null, data, { headers }]
    } catch (error) {
      return [error, error.response?.status]
    }
  }

  public async getGenerationData(generationID: number) {
    return this.axiosCall({ method: 'get', url: `generation/${generationID}` })
  }

  public async getPokemonSpecies(pokemonID: number) {
    return this.axiosCall({ method: 'get', url: `pokemon-species/${pokemonID}` })
  }

  public async getPokemonType(typeName: string) {
    return this.axiosCall({ method: 'get', url: `type/${typeName}` })
  }
}

export const pokemonsApi = new PokemonAPIService()
