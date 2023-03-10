<template>
    <p>Hello World!</p>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { pokemonsApi } from '@/services/api';

    export default defineComponent({
        async mounted() {
            console.log(await pokemonsApi.getPokemons());
        }
    });
</script>