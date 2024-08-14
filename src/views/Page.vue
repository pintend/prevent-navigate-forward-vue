<script setup>
const history = window.history;
</script>

<template>
    <p class="p-10">
        Now Navigate <button @click="history.back()" class="bg-gray-200 px-2 py-1"> Back </button>
    </p>

    
</template>