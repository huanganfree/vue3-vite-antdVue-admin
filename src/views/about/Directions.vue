<template>
    <div>
        <div>direactions</div>

        <a-button type="primary" @click="increment">增加</a-button>
        <a-button @click="decrement">减少</a-button>
    </div>
</template>

<script setup>
import { useUnReadNumStore } from '../../store';

const { decrement, increment }= useUnReadNumStore()

</script>
