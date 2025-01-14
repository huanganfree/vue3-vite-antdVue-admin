<template>
    <div class="wrapper">
        <div class="item" v-for="(item, index) in list" :key="item" :draggable="true"
            @dragstart="(e) => handleDragstart(e, index)" @dragover="(e) => handledragover(e, index)" @drop="(e) => handleDrop(e, index)" @dragenter="(e) => handledragenter(e, index)">
            {{ item.name }}
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
let dragIndex = 0
let enterIndex = 0

const list = ref([
    {
        name: '第1个'
    },
    {
        name: '第2个'
    }
])

function handleDragstart(e, index) {
    console.log('handleDragstart==', e);
    dragIndex = index
}

function handledragenter(e, index) {
    console.log('handledragenter==', e);
    e.preventDefault()
    enterIndex = index
}

function handledragover(e) {
    e.preventDefault()
}

function handleDrop(e) {
    console.log('handleDrop==', e);
    const dragItem = list.value[dragIndex]
    const enterItem = list.value[enterIndex]
    list.value.splice(enterIndex,1,dragItem)
    list.value.splice(dragIndex,1,enterItem)
}

</script>
<style lang="less" scoped>
.wrapper {
    width: 398px;
    height: 506px;
    border-radius: 18px;
    border: 0.854px solid #4E6AC4;
    padding: 20px;
}

.item {
    border: 1px solid;
    height: 40px;
    margin-bottom: 20px;
    cursor: pointer;
    user-select: none;
}
</style>