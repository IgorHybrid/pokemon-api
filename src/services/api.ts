import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

export default class PokemonAPIService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "https://pokeapi.co/api/v2"
        });
    }

    private async axiosCall<T>(config: AxiosRequestConfig) {
        try {
            const { data } = await this.axiosInstance.request<T>(config);
            return [null, data];
        } catch (error) {
            return [error];
        }
    }

    public async getPokemons() {
        return this.axiosCall({method: 'get', url: 'generation/1'});
    }
}

export const pokemonsApi = new PokemonAPIService();

