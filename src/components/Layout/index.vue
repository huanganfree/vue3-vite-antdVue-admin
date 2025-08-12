<template>
  <a-layout class="layout-content">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible class="layout-sider">
      <div class="project-name" v-if="!collapsed">vue+vite</div>
      <Menu @target-menu="handleGetTargetMenu" />
    </a-layout-sider>
    <a-layout>
      <!-- <a-layout-header class="layout-header" style="background: #fff; padding: 0">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        <a-breadcrumb>
          <a-breadcrumb-item v-for="item in breadcrumbData" :key="item.name">
            <a @click="$router.push({ name: item.path })">{{ item.name }}</a>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </a-layout-header> -->
      <a-layout-content :style="{}" class="layout-content-area">
        <!-- <Tabs></Tabs> -->
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import Menu from "@/components/Menu/index.vue";
import Tabs from '@/components/Tabs/tabs.vue';
export default {
  name: "App",
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    Menu,
    Tabs
  },
  data() {
    return {
      collapsed: false,
      breadcrumbData: []
    };
  },
  methods: {
    handleGetTargetMenu(data) {
      this.breadcrumbData = data.meta.namePath
    }
  },
};
</script>
<style scoped lang="less">
.layout-header {
  display: flex;
  align-items: center;
}

.layout-content {
  height: 100vh;
}

.layout-sider{
  flex: 0 0 180px !important;
  width: 180px !important;
  max-width:max-content  !important;
}
.layout-content .trigger {
  font-size: 18px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.layout-content .trigger:hover {
  color: #1890ff;
}

.layout-content .project-name {
  height: 32px;
  /* background: rgba(255, 255, 255, 0.3); */
  margin: 16px;
  display: flex;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  justify-content: center;
}

.layout-content-area {
  margin: 10px;
  padding: 10px;
  background: #fff;
  min-height: 280px;
  overflow: auto;
}
</style>
