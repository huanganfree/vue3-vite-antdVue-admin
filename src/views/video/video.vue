<template>
    <div class="box">
      <div class="video-box">
        <video controls ref="videoRef" preload="true"
          src="https://qt-minio.ictshop.com.cn:9000/resource-management/2025/01/08/7b96ac9d957c45a7a94b355ca7a89d02.mp4"></video>
        <a-button type="primary" @click="saveCoverImg" :loading="loading">{{ loading ? '截取中': '保存为封面' }}</a-button>
      </div>
  
      <img :src="coverImg" alt="">
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const videoRef = ref(null)
  const coverImg = ref(null)
  const loading = ref(false)
  
  function saveCoverImg() {
    videoRef.value.pause();
    loading.value = true;
    const currentTime = videoRef.value.currentTime;
    createVideo(currentTime)
  }
  
  function createVideo(currentTime) {
    const videoElement = document.createElement("video");
    videoElement.setAttribute("crossorigin", "anonymous"); // 解决跨域问题
    videoElement.currentTime = currentTime
    videoElement.muted = true;
    videoElement.autoplay = true;
    videoElement.oncanplay = function () {
      drawCoverImage(videoElement)
    }
    videoElement.src = "https://qt-minio.ictshop.com.cn:9000/resource-management/2025/01/08/7b96ac9d957c45a7a94b355ca7a89d02.mp4";
  }
  
  function drawCoverImage(vEle) {
    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");
    c.width = vEle.videoWidth;
    c.height = vEle.videoHeight;
    ctx.drawImage(vEle, 0, 0, c.width, c.height);
    const img = c.toDataURL("image/png");
    coverImg.value = img;
    loading.value = false;
  }
  
  </script>
  
  <style lang="less" scoped>
  .box {
    .video-box {
      display: flex;
      align-items: flex-end;
  
      video {
        width: 490px;
        margin: 10px 10px 0 0;
      }
    }
  
    img {
      width: 300px;
      margin-top: 10px;
    }
  }
  </style>
  