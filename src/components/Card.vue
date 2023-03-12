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

<style scoped>
    p {
        text-align: center;
        font-weight: bold;
    }
    .up img {
        position: relative;
        left: 20%;
        width: 100px;
        height: 100px;
    }
    .up h4 {
        font-weight: bold;
        padding-left: 5%;
    }
    .one-type, 
    .two-type {
        position: absolute;
    }
    .one-type img, 
    .two-type img {
        flex-grow: 1;
        padding: 5px;
        width: 35px;
        height: 35px;
        background-color: var(--vt-c-white-mute);
        border-radius: 25px;
    }
    .one-type {
        left: 50%;
        transform: translate(-50%);
    }
    .two-type {
        left: 45%;
        transform: translate(-45%);
    }

    .two-type img {
        margin-left: 2.5px;
        margin-right: 2.5px;
    }
</style>