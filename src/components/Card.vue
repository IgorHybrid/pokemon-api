<template>
    <div class="up">
        <h4>#{{ pokemon!["order"] }}</h4>
    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon!['id']}.svg`"/>
    </div>
    <p :style="{color: setDarkerColor(pokemon!['color'])}"> 
        {{ pokemon!["name"].toUpperCase() }}
    </p>
    <div :class="pokemon!['type'].length > 1 ? 'two-type' : 'one-type'">
        <img v-for="elm in pokemon!['type']" :src="getImageURL(elm['name'])"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import type { PropType } from 'vue'
    import type IPokemon from '@/models/pokemon.model'
    import { getImageURL, setDarkerColor } from '@/utils';

    export default defineComponent({
        props: {
            pokemon: Object as PropType<IPokemon>
        },
        methods: {
            getImageURL,
            setDarkerColor
        }
    });
</script>