import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

import type IPokemon from '@/models/pokemon.model'
import type IType from '@/models/type.model'

import { pokemonsApi } from '@/services/api'

export const usePokemonStore = defineStore('pokemon', () => {
  const filterName: Ref<string> = ref('')
  const filterType: Ref<string[]> = ref([])
  const pokemons: Ref<IPokemon[]> = ref([])
  const types: Ref<string[]> = ref([])
  const loading: Ref<Boolean> = ref(true)

  const filteredPokemon = computed(() => {
    const regex = new RegExp('.*' + filterName.value + '.*', 'gi')
    return pokemons.value
      .filter((elm) => elm['name'].match(regex))
      .filter((elm) => {
        if (!filterType.value || filterType.value.length < 1) {
          return elm
        }
        return elm['type'].some((val) => filterType.value.includes(val.name))
      })
  })

  async function fetchPokemons() {
    try {
      const [error, data] = await pokemonsApi.getGenerationData(1)

      if (error) {
        throw error
      }

      //Get types and theirs pokemons
      const typesList = await Promise.all(
        data['types'].map(async (val: { name: any }) => {
          const name = val['name']

          const [error, typeDetails] = await pokemonsApi.getPokemonType(name)

          if (error) {
            throw error
          }

          return {
            name,
            pokemons: typeDetails['pokemon']
          }
        })
      )

      //Get pokemons details
      const pokemonsList = await Promise.all(
        data['pokemon_species'].map(async (val: { [x: string]: any }) => {
          const name = val['name']
          const id = parseInt(/\/pokemon-species\/(\d+)\//gi.exec(val['url'])![1])

          const [error, pokemonDetails] = await pokemonsApi.getPokemonSpecies(id)

          if (error) {
            throw error
          }

          const typeList: IType[] = new Array()

          typesList.forEach((type) => {
            const pokemonType = type.pokemons.filter(
              (elm: { pokemon: { name: any } }) => elm.pokemon.name == name
            )

            if (pokemonType.length > 0) {
              typeList.push({ name: type.name, slot: pokemonType[0]['slot'] })
            }
          })

          //White color is too light for the app
          const color =
            pokemonDetails['color'].name === 'white' ? '#f4f0d2' : pokemonDetails['color'].name

          return {
            id,
            order: pokemonDetails['order'],
            name,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
            color,
            type: typeList.sort((a, b) => {
              return a.slot - b.slot
            })
          }
        })
      )

      pokemons.value = pokemonsList.sort((a, b) => {
        return a.order - b.order
      })
      types.value = typesList
        .map((elm) => {
          return elm.name
        })
        .sort()
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  function setFilterName(name: string) {
    filterName.value = name
  }

  function setFilterType(type: string) {
    if (type) {
      const index = filterType.value.indexOf(type)
      if (index > -1) {
        filterType.value.splice(index, 1)
      } else {
        filterType.value.push(type)
      }
    } else {
      filterType.value = []
    }
  }

  return {
    types,
    loading,
    filterType,
    filteredPokemon,
    fetchPokemons,
    setFilterName,
    setFilterType
  }
})
