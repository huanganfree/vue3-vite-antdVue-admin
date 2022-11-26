<template>
  <a-tabs :activeKey="activeKey" type="card" @change="onTabChange">
    <a-tab-pane v-for="pane in panes" :key="pane.path" :tab="pane.name" :closable="true">
      <router-view></router-view>
    </a-tab-pane>
  </a-tabs>
</template>
<script setup>

import { watch, ref } from '@vue/runtime-core';
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const panes = ref([])

const activeKey = ref('/home')



watch(() => route, (newVal) => {
  const { meta, path } = newVal
  if (!panes.value.find(item => item.name === meta.title)) { // 找不到，就新增
    panes.value.push({ name: meta.title, path })
  }
  activeKey.value = path
  router.push(activeKey.value)

}, { immediate: true, deep: true })



function onTabChange(active) {
  activeKey.value = active
  router.push(active)
}
</script>