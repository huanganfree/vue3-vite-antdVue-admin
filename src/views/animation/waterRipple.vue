<template>
        <div class="animate-wave">
            <img class="img" src="@/assets/images/face.png" alt="">
            <div class="ww w1"></div>
            <div class="ww w2"></div>
            <div class="ww w3"></div>
            <div class="ww w4"></div>
        </div>
</template>

<script setup>

</script>

<style scoped lang='less'>
.animate-wave {
    width: 500px;
    height: 500px;
    position: relative;
    margin: 0 auto;
    background: rgb(46,54,65);
}

.animate-wave .ww {
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

.img{
    width: 14px;
    height: 14px;
    position: absolute;
    z-index: 12;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
}

.animate-wave .w2 {
    animation-delay: 1s;
}

.animate-wave .w3 {
    animation-delay: 2s;
}

.animate-wave .w4 {
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
