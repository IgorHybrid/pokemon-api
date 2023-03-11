<template>
    <ul>
        <li>All</li>
        <li v-for="elm in types" :key="elm">
            <Filter :typeName="elm"/>
        </li>
    </ul>
    <hr>
    <ul>
        <li v-for="elm in filteredPokemon" :key="elm['order']">
            <Card :pokemon="elm" />
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import Filter from '@/components/Filter.vue';
    import Card from '@/components/Card.vue';
    import { usePokemonStore } from '@/stores/pokemons'

    const store = usePokemonStore();
    const { types, filteredPokemon } = storeToRefs(store);
</script>