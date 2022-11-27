<template>
    <div class="login">
        <a-form class="login_form" :model="formState" :label-col="{ span: 8 }" :wrapper-col="{ span: 14 }"
            @finish="onFinish" @finishFailed="onFinishFailed">
            <h3>vue3 + vite 后台管理</h3>
            <a-form-item label="" name="username" :rules="[{ required: true, message: '请输入用户名!' }]">
                <a-input v-model:value="formState.username" placeholder="请输入用户名">
                    <template #prefix>
                        <user-outlined />
                    </template>
                </a-input>
            </a-form-item>
            <a-form-item label="" name="password" :rules="[{ required: true, message: '请输入密码!' }]">
                <a-input-password v-model:value="formState.password" placeholder="请输入密码">
                    <template #prefix>
                        <lock-outlined />
                    </template>
                </a-input-password>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" html-type="submit" style="width: 100%;">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>
<style lang="less" scoped>
.login {
    background-image: url('@/assets/images/login.svg');
    height: 100vh;

    .login_form {
        width: 400px;
        padding-top: 10%;
        margin: 0 auto;
    }
    :deep(.ant-input-affix-wrapper){
        padding: 7px 11px;
    }
    :deep(.ant-col-14){
        max-width: 100%;
    }
    :deep(.ant-btn){
        padding: 7px 11px;
        height: auto;
    }
    h3{
        font-weight: bold;
        font-size: 28px;
        text-align: center;
    }
}
</style>
<script setup>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { ref } from "vue";
const formState = ref({})

</script>