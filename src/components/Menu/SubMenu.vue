<template>
  <a-sub-menu :key="menuInfo.path">
    <template #icon>
      <IconFont :type="menuInfo.meta.icon" />
    </template>
    <template #title>{{ menuInfo.meta.title }}</template>
    <template v-for="item in menuInfo.children" :key="item.path">
      <template v-if="!item.children">
        <a-menu-item :key="item.path">
          <template #icon>
            <IconFont :type="item.meta.icon" />
          </template>
          {{ item.meta.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import IconFont from '@/components/IconFont/index.vue'
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
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss"></style>
