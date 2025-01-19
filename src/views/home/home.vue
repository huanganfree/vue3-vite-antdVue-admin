<template>
  <div class="box">
    <div class="video-box">
      <video controls ref="videoRef" crossOrigin='anonymous'
        src="https://qt-minio.ictshop.com.cn:9000/resource-management/2025/01/08/a2aa1ec04f244c149a3f8890e2556274.mp4"></video>
      <a-button type="primary" @click="saveCoverImg">保存为封面</a-button>
    </div>

    <img :src="coverImg" alt="">
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const videoRef = ref(null)
const coverImg = ref(null)

onMounted(() => {


});

function saveCoverImg() {
  drawImage()
}

function drawImage() {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d");
  c.width = videoRef.value.videoWidth;
  c.height = videoRef.value.videoHeight;
  videoRef.value.currentTime = 4000
  videoRef.value.onloadeddata = function () {
    console.log('this', this);
    ctx.drawImage(videoRef.value, 0, 0, c.width, c.height);
    const img = c.toDataURL("image/png");
    console.log(img);
    coverImg.value = img;
  }
  videoRef.value.src = "https://qt-minio.ictshop.com.cn:9000/resource-management/2025/01/08/a2aa1ec04f244c149a3f8890e2556274.mp4";
  videoRef.value.play();
}


</script>

<style lang="less" scoped>
.box {
  .video-box {
    display: flex;
    align-items: flex-end;

    video {
      width: 490px;
      margin: 10px 0 0 0;
    }
  }

  img {
    width: 300px;
    margin-top: 10px;
  }
}
</style>
