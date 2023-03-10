<template>
    <label>{{ typeName }}</label>
    <img :src="getImageURL(typeName)" :alt="typeName"/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { getImageURL } from '@/utils';

    export default defineComponent({
        props: {
            typeName: String
        },
        methods: {
            getImageURL
        }
    });
</script>