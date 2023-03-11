<template>
    <h5>#{{ pokemon!["order"] }}</h5>
    <h1> {{ pokemon!["name"].toUpperCase() }}</h1>
    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon!['id']}.svg`"/>
    <div>
        <img v-for="elm in pokemon!['type']" :src="getImageURL(elm['name'])"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import type { PropType } from 'vue'
    import type IPokemon from '@/models/pokemon.model'
    import { getImageURL } from '@/utils';

    export default defineComponent({
        props: {
            pokemon: Object as PropType<IPokemon>
        },
        methods: {
            getImageURL
        }
    });
</script>