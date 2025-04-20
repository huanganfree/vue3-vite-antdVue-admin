<template>
    <div class=''>
        <audio :src="TaiTan" controls></audio>
    </div>
    <CustomAudio></CustomAudio>
</template>

<script setup>
import TaiTan from '@/assets/taitan.mp3'
import CustomAudio from './components/customAudio.vue'

</script>

<style scoped lang='less'>
audio{
    width: 700px;
    // height: 100px;
    object-fit: contain;
    margin-bottom: 90px;
}
</style>
