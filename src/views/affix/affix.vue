<template>
    <div class="affix-container" ref="containerRef">
        <div class='affix'  ref="aimRef">
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';

const top = ref(10)
const containerRef = ref(null)
const aimRef = ref(null)

onMounted(() => {
    initEventListener()
})

const options = {
    threshold: [0, 0.10, 0.5],
    root: containerRef.value
}

function initEventListener(params: type) {
    const observer = new IntersectionObserver((entries) => {
        console.log(entries);
        const [entry] = entries
        const ratio = Math.floor((entry.intersectionRatio) * 100)
        if (ratio >= 10) {
            console.log('>=10');

        }
        if (ratio <= 0) {
            console.log('<=0');
        }
    }, options);
    observer.observe(aimRef.value)
}
</script>

<style scoped lang='less'>
.affix-container {
    height: 1000px;
    overflow: auto;
    .affix{
        width: 300px;
        height: 500px;
        background-color: aquamarine;
    }
}

</style>
