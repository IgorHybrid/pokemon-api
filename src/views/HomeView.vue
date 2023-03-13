<template>
  <ul class="types">
    <li :class="filterType.length < 1 ? 'selected' : ''" @click="store.setFilterType('')">
      <p>All</p>
    </li>
    <li
      v-for="elm in types"
      :key="elm"
      @click="store.setFilterType(elm)"
      :class="filterType.includes(elm) ? 'selected' : ''"
    >
      <Filter :typeName="elm" />
    </li>
  </ul>
  <ul class="cards">
    <li
      v-for="elm in filteredPokemon"
      :key="elm['order']"
      :style="{
        'border-color': setDarkerColor(elm['color']),
        'background-color': setBackgroundColor(elm['color'])
      }"
    >
      <Card :pokemon="elm" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Filter from '@/components/FilterComponent.vue'
import Card from '@/components/CardComponent.vue'
import { usePokemonStore } from '@/stores/pokemons'

import { setBackgroundColor, setDarkerColor } from '@/utils'

const store = usePokemonStore()
const { types, filterType, filteredPokemon } = storeToRefs(store)
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.types {
  padding-top: 20px;
  margin-left: 5%;
  margin-right: 5%;
}

.types li {
  flex: 1 0 calc(11% - 5px);
  height: 50px;
  margin: 0.5%;
  border-radius: 25px;
  background-color: #bfbfbf;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.types .selected {
  border-style: solid;
  border-width: 2px;
  border-color: #69bca7;
  background-color: #baf8eb;
}

.cards {
  margin-left: 4%;
  justify-content: stretch;
}

.cards li {
  margin: 2%;
  width: 15%;
  height: 170px;
  border-radius: 10px;
  padding-bottom: 15px;
  border-width: 2px;
  border-style: solid;
  opacity: 0.5;
  transition: opacity 1s;
}

.cards li:hover {
  opacity: 1;
}
</style>
