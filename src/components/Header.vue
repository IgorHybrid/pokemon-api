<template>
    <header>
        <img src="@/assets/images/logo.svg">
        <input placeholder="Filter by name">
    </header>
</template>

<script setup lang="ts"></script>

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