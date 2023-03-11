<template>
    <header>
        <img src="@/assets/images/logo.svg">
        <div>
            <input v-model="filterValue" list="pokenames" placeholder="Filter podcasts..." />
            <datalist id="pokenames">
                <option v-for="item in store.filteredPokemon" :value="item['name']">{{ item['name'] }}</option>
            </datalist>
        </div>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { usePokemonStore } from '@/stores/pokemons'

    export default defineComponent({
        setup() {
            const store = usePokemonStore()
            // **only return the whole store** instead of destructuring
            return { store }
        },
        data() {
            return {
                filterValue: ""
            }
        },
        watch: {
            filterValue: {
                handler(newValue) {
                    this.store.setFilterName(newValue);
                }
            }
        }
    });
</script>

<style scoped>
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2em;
        background-color: var(--vt-c-black-soft);
    }

    img {
        width: 350px;
        height: 200px;
    }
</style>