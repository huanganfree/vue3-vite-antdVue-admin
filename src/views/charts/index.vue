<template>
  <div class="charts">
    <Map class="marginRight15"/>
    <Bar class="marginRight15" />
    <Line class="marginRight15"/>
    <StackBar />
  </div>
</template>

<script setup>
import Map from './map.vue'
import Bar from './bar.vue'
import Line from './line.vue'
import StackBar from './stackBar.vue';
</script>
<style lang="less" scoped>
.marginRight15{
  margin-right: 15px;
}
.charts{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
