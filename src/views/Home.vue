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
    <ul class="cards">
        <li v-for="elm in filteredPokemon" 
            :key="elm['order']"
            :style="{'border-color': setDarkerColor(elm['color']) , 'background-color': setBackgroundColor(elm['color'])}" 
        >
            <Card :pokemon="elm" />
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import Filter from '@/components/Filter.vue';
    import Card from '@/components/Card.vue';
    import { usePokemonStore } from '@/stores/pokemons'

    import { setBackgroundColor, setDarkerColor } from '@/utils'

    const store = usePokemonStore();
    const { types, filterType, filteredPokemon } = storeToRefs(store);
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .types li {
        flex: 1 0 calc(10% - 5px);
        height: 50px;
        margin: 1%;
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
        background-color: #BAF8EB;
    }

</style>