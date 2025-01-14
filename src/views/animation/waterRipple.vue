<template>
    <div class="wrapper parent">
        <div class="animate-wave marginRight15">
            <WaterRippleAtom />
        </div>
        <Border class="marginRight15"/>
        <Drag />
    </div>

</template>

<script setup>
import WaterRippleAtom from '../../components/waterRippleAtom.vue';
import Border from './border.vue';
import Drag from './drag.vue';


</script>

<style scoped lang='less'>
.parent{
    display: flex;
    top: 20%;
    left: 20%;
}
.animate-wave {
    position: relative;
    background: rgb(46, 54, 65);
    width: 398px;
    height: 506px;
    border-radius: 18px;
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

.img {
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
