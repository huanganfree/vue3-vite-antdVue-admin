<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
    @select="handleSelect"
    class="menu-wrapper"
  >
    <template v-for="item in menuList" :key="item.name">
      <template v-if="!item.children">
        <a-menu-item :key="item.name">
          <template #icon>
            <IconFont :type="item.meta.icon" />
          </template>
          {{ item.meta.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :key="item.name" :menu-info="item" />
      </template>
    </template>
  </a-menu>
</template>

<script>
import IconFont from "@/components/IconFont/index.vue";
import SubMenu from "./SubMenu";
export default {
  name: "Menu",
  components: {
    IconFont,
    SubMenu,
  },
  data() {
    return {
      selectedKeys: [],
      openKeys: [],
      menuList: [],
    };
  },
  watch: {
    $route(to) {
      console.log('to==', to);
      this.handleSelect({ selectedKeys: [to.name] });
      this.getSelectOpenMenu();
    },
  },
  mounted() {
    this.initMenu();
  },
  methods: {
    initMenu() {
      this.getMenusData();
      this.getSelectOpenMenu();
    },
    getMenusData() {
      let asyncRoutes = sessionStorage.getItem("const_routes");
      this.menuList = JSON.parse(asyncRoutes);
      const selectMenu = sessionStorage.getItem("select_menu") || "[]";
      const selectedKeys = JSON.parse(selectMenu);
      const finalPath = selectedKeys.length ? selectedKeys :[this.menuList[0].name] 
      this.handleSelect({ selectedKeys: finalPath })
    },
    getSelectOpenMenu() {
      
      // this.$router.getRoutes() 拍平所有路由
      const targetMenu = this.$router
        .getRoutes()
        .find((r) => this.selectedKeys.includes(r.name));
      this.$emit('target-menu', targetMenu)
      this.openKeys = targetMenu.meta.namePath.slice(0).map(item => item.path);
    },
    handleSelect({ selectedKeys }) {
      this.selectedKeys = selectedKeys;
      sessionStorage.setItem("select_menu", JSON.stringify(selectedKeys));
      this.$router.push({name: selectedKeys[0]});
    },
  },
};
</script>

<style scoped lang="less">
.menu-wrapper{
  height: calc(100% - 64px);
  overflow-y: auto;
}
</style>
