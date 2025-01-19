<template>
  <div class="box">
    <div class="video-box">
      <video controls ref="videoRef" 
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

function saveCoverImg() {
  videoRef.value.pause();
  const currentTime = videoRef.value.currentTime;
  createVideo(currentTime)
}

function createVideo(currentTime) {
  const videoElement = document.createElement("video");
  // videoElement.setAttribute("crossorigin", "anonymous");
  videoElement.currentTime = currentTime
  videoElement.muted = true;
  videoElement.autoplay = true;
  videoElement.oncanplay = function () {
    drawCoverImage(videoElement)
  }
  videoElement.src = "https://qt-minio.ictshop.com.cn:9000/resource-management/2025/01/08/a2aa1ec04f244c149a3f8890e2556274.mp4";
}

function drawCoverImage(vEle) {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d");
  c.width = vEle.videoWidth;
  c.height = vEle.videoHeight;
  ctx.drawImage(vEle, 0, 0, c.width, c.height);
  const img = c.toDataURL("image/png");
  coverImg.value = img;
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
