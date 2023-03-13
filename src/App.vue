<template>
  <Header />
  <main>
    <Home v-if="!loading" />
    <img v-else src="@/assets/images/loader.gif" />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import Home from '@/views/HomeView.vue'
import Header from '@/components/HeaderComponent.vue'
import { usePokemonStore } from '@/stores/pokemons'

const store = usePokemonStore()
const { loading } = storeToRefs(store)

onMounted(async () => {
  await store.fetchPokemons()
})
</script>

<style scoped></style>
