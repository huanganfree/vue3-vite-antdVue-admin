<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
    @select="handleSelect"
  >
    <template v-for="item in menuList" :key="item.path">
      <template v-if="!item.children">
        <a-menu-item :key="item.path">
          <template #icon>
            <IconFont :type="item.meta.icon" />
          </template>
          {{ item.meta.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :key="item.path" :menu-info="item" />
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
      this.handleSelect({ selectedKeys: [to.path] });
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
      let asyncRoutes = localStorage.getItem("const_routes");
      asyncRoutes = JSON.parse(asyncRoutes);
      this.menuList = asyncRoutes;
      this.selectedKeys = [this.menuList[0].path];
    },
    getSelectOpenMenu() {
      const selectMenu = localStorage.getItem("select_menu") || "[]";
      this.selectedKeys = JSON.parse(selectMenu);
      // this.$router.getRoutes() 拍平所有路由
      const targetMenu = this.$router
        .getRoutes()
        .find((r) => this.selectedKeys.includes(r.path));
      this.openKeys = targetMenu.meta.namePath.slice(0);
    },
    handleSelect({ selectedKeys }) {
      localStorage.setItem("select_menu", JSON.stringify(selectedKeys));
      this.$router.push(selectedKeys[0]);
    },
  },
};
</script>

<style scoped lang="css"></style>
