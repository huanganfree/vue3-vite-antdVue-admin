<template>
    <div class="wrapper">
        <div class="box1"></div>
    </div>
</template>
<style lang="less" scoped>
.wrapper {
    width: 398px;
    height: 506px;
    border-radius: 18px;
    border: 0.854px solid #4E6AC4;
}

.box1 {
    position: relative;
    width: 200px;
    height: 100px;
    border: 3px solid transparent;
    border-image: linear-gradient(45deg, gold, deeppink) 1;
    // clip-path: inset(0 round 20px);
    border-radius: 10px;
    margin: 10px auto;
    background-color: rgb(208, 208, 208);
}
</style>