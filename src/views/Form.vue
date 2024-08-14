<script setup>
import { RouterLink } from 'vue-router'
import { watch, reactive, computed, ref } from 'vue';

const canGoForward = window.navigation?.canGoForward ?? window.history.length > 2

const form = reactive({
    input: '',
});

const formIsDirty = computed(() => form.input !== '');

const cleanups = ref([]);
const cleanup = () => {
    cleanups.value.forEach(fn => fn())
    cleanups.value.length = 0
};

const registerEventListener = (el, event, listener) => {
    el.addEventListener(event, listener);
    return () => el.removeEventListener(event, listener);
}

watch(formIsDirty, () => {
    cleanup();

    if (formIsDirty) {
        cleanups.value.push(
            registerEventListener(window, 'beforeunload', (event) => {
                event.preventDefault();
            })
        )
    }
})
</script>

<template>
    <div class="p-10 space-y-4">
        <RouterLink
            v-if="!canGoForward"
            class="bg-gray-200 px-2 py-1"
            to="/random-page"
        >
            Click Me to go to another page!
        </RouterLink>

        <template v-if="canGoForward">
            <p v-if="!formIsDirty">
                Fill in data in the input
            </p>

            <input type="text" v-model="form.input">

            <p v-if="cleanups.length">
                Event handler is registered, Try refreshing the page or going back, the event handler works

                <br> 

                <span class="text-sm">
                    On Safari back is not prevented, but when naviating back and forward again the state is preserved
                </span>
            </p>

            <p v-if="cleanups.length" class="text-red-400">
                Navigate Forward works for me...
            </p>
        </template>

    </div>
</template>