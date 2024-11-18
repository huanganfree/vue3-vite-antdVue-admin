<template>
    <div class="parent">
        <img class="img" src="@/assets/images/face.png" alt="">
        <div class="ww w1"></div>
        <div class="ww w2"></div>
        <div class="ww w3"></div>
        <div class="ww w4"></div>
    </div>
</template>

<script setup>

const props = defineProps({
    imgUrl: {

    }
})
</script>

<style scoped lang='less'>
.parent {
    width: 16px;
    height: 16px;
    position: absolute;
}


.img {
    position: absolute;
    z-index: 12;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
}

.ww {
    background: #00FF9480;
    position: absolute;
    border-radius: 50%;
    animation: opac 3s infinite;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
}


.w2 {
    animation-delay: 1s;
}

.w3 {
    animation-delay: 2s;
}

.w4 {
    animation-delay: 3s;
}

@keyframes opac {
    from {
        opacity: 1;
        width: 24px;
        height: 24px;
    }

    to {
        opacity: 0;
        width: 54px;
        height: 54px;
    }
}
</style>
