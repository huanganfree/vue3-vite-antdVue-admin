<template>
    <button @click="handleBackMini">返回小程序</button>
</template>
<script setup>
import { onBeforeMount } from "vue";

function handleBackMini() {
    wx.miniProgram.navigateTo({ url: '/pages/index/index' })
}

// 获取查询参数
function getSearchString(key, Url) {
    var str = Url;
    str = str.substring(1, str.length);
    var arr = str.split("&");
    var obj = new Object();
    for (var i = 0; i < arr.length; i++) {
        var tmp_arr = arr[i].split("=");
        obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
    }
    return obj[key];
}

onBeforeMount(() => {
    /**
     * 注意：这里使用window.location.href可以拿到由小程序跳转h5传过来的查询参数,只不过这是完整的url。该项目是vue3项目，只能用这种方式获取查询参数
     * 而在uniapp开发中，可以使用onload钩子获取传参，参数类型为Object（用于页面传参)
     * 
     *  */ 
    var href = window.location.href;
    console.log('href==', href);
});

</script>