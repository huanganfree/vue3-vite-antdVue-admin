<template>
  <a-sub-menu :key="menuInfo.name">
    <template #icon>
      <IconFont :type="menuInfo.meta.icon" />
    </template>
    <template #title>{{ menuInfo.meta.title }}</template>
    <template v-for="item in menuInfo.children" :key="item.name">
      <template v-if="!item.children">
        <a-menu-item :key="item.name">
          <template #icon>
            <IconFont :type="item.meta.icon" />
          </template>
          {{ item.meta.title }}
          <span class="unread-num" v-if="['引导'].includes(item.meta.title)">{{ computedNum }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.name" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import IconFont from '@/components/IconFont/index.vue'
import { useUnReadNumStore } from '@/store/index.js'

export default {
  name: "sub-menu",
  components: { IconFont },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  computed: {
    computedNum(){
      const store = useUnReadNumStore()
      return store.unReadNum
    }
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.unread-num{
  padding: 2px 5px;
  border-radius: 50%;
  background-color: rgb(250, 105, 15);
}
</style>
