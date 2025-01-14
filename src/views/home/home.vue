<template>
  <div class="box">
    <video controls ref="videoRef"
      src="https://qt-minio.ictshop.com.cn:9000/resource-management/2025/01/08/a2aa1ec04f244c149a3f8890e2556274.mp4"></video>
    <img src="@/assets/images/fetch.jpg" alt="">
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const videoRef = ref(null)

onMounted(() => {

  videoRef.value.currentTime = 400
  videoRef.value.oncanplay = function () {
    console.log(1221);
    drawImage(videoRef.value)
  }
});

function drawImage(video) {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d");
  ctx.drawImage(video, 0, 0);
}


</script>

<style lang="less" scoped>
.box {
  video {
    width: 490px;
  }

  img {
    width: 490px;
    height: 300px;
  }
}
</style>
