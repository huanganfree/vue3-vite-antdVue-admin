<template>
  <IconCom :type="type" style="font-size: 16px"></IconCom>
</template>

<script>
import { createFromIconfontCN } from "@ant-design/icons-vue";

const IconCom = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_3709302_nrtagou0brh.js",
});

export default {
  name: "icon-font",
  props: {
    type: {
      type: String,
    },
  },
  components: {
    IconCom,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="css">
:deep(.anticon){
  font-size: 24px;
}
</style>
