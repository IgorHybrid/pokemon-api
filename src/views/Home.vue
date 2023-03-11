<template>
    <ul class="types">
        <li :class="filterType.length < 1 ? 'selected' : ''" 
            @click="store.setFilterType('')"
        >   
            <p>All</p>
        </li>
        <li v-for="elm in types" :key="elm" 
            @click="store.setFilterType(elm)"
            :class="filterType.includes(elm) ? 'selected': ''"
        >
            <Filter :typeName="elm"/>
        </li>
    </ul>
    <hr>
    <ul class="cards">
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
    const { types, filterType, filteredPokemon } = storeToRefs(store);
</script>