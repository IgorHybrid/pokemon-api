<template>
    <img :src="getImageURL(typeName!)" :alt="typeName"/>
    <label>{{ capitalizeFirstLetter(typeName!) }}</label>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { getImageURL, capitalizeFirstLetter } from '@/utils';

    export default defineComponent({
        props: {
            typeName: String
        },
        methods: {
            getImageURL,
            capitalizeFirstLetter
        }
    });
</script>