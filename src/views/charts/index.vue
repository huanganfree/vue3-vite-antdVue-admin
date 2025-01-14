<template>
  <div class="charts">
    <Map class="marginRight15" />
    <Bar class="marginRight15" />
    <Line class="marginRight15" />
    <StackBar class="marginRight15"/>
    <Weather class="marginRight15" />
    <Pie class="marginRight15"/>
    <MultilayerRing />
  </div>
</template>

<script setup>
import Map from './map.vue'
import Bar from './bar.vue'
import Line from './line.vue'
import StackBar from './stackBar.vue';
import Pie from './pie.vue';
import Weather from './weather.vue';
import MultilayerRing from './multilayerRing.vue';
</script>
<style lang="less" scoped>


.charts {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
</style>
