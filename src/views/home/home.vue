<template>
  home
  <button @click="handleBackMini">返回小程序</button>
</template>
<script setup>
console.log(wx);
function handleBackMini() {
  wx.miniProgram.navigateTo({url: '/pages/index/index'})
}
</script>
