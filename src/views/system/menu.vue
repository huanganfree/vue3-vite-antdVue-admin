<template>
    <div class="menu-wrapper" ref="menuRef">
        <div class="btn-area margin_button10">
            <a-button type="primary" @click="modalVisible = true">新增</a-button>
        </div>
        <a-modal :visible="true" v-if="modalVisible" :title="'新增菜单'" @cancel="modalVisible = false"
            @ok="handleAddMenuSubmit" class="modal-area" :getContainer="() => menuRef">
            <Form :FormItemConfig="FormItemConfig" :formEditData="formEditData" ref="formRef" />
        </a-modal>
    </div>
</template>
<style >
.modal-area {
    width: 800px !important;
}
</style>
<style lang="less" scoped>
.btn-area {
    text-align: right;
}
</style>
<script setup>
import { ref } from 'vue';
import Form from '@/components/Form/Form.vue'

const modalVisible = ref(false)
const formRef = ref(null)
const formEditData = ref({})
const menuRef = ref(null)
const FormItemConfig = [
    {
        label: '菜单类型',
        vModel: 'menuType',
        type: 'radio-group',
        defaultValue: 1,
        rules: [
            {
                required: true,
                message: '请选择'
            }
        ],
        options: [
            {
                value: 1,
                label: '菜单'
            },
            // {
            //     value: 2,
            //     label: '按钮'
            // }
        ]
    },
    {
        label: '菜单名称',
        vModel: 'menuName',
        type: 'input',
        defaultValue: undefined,
        rules: [
            {
                required: true,
                message: '请输入'
            }
        ]
    },
    {
        label: '菜单路由',
        vModel: 'menuUrl',
        type: 'input',
        defaultValue: undefined,
        rules: [
            {
                required: true,
                message: '请输入'
            }
        ]
    },
    {
        label: '文件路径',
        vModel: 'filePath',
        type: 'input',
        defaultValue: undefined,
        rules: [
            {
                required: true,
                message: '请输入'
            }
        ]
    },
    {
        label: '父级菜单',
        vModel: 'filePath',
        type: 'tree-select',
        defaultValue: undefined,
        options: []
    },
    {
        label: '顺序',
        vModel: 'orderNum',
        type: 'input-number',
        defaultValue: 1,
        rules: [
            {
                required: true,
                message: '请输入'
            }
        ]
    },
    {
        label: '菜单图标',
        vModel: 'menuIcon',
        type: 'single-select',
        defaultValue: undefined,
        rules: [
            {
                required: true,
                message: '请选择'
            }
        ]
    },
    {
        label: '是否显示',
        vModel: 'isShow',
        type: 'switch',
        defaultValue: true
    }
]

function handleAddMenuSubmit() {
    formRef.value.formRef.validateFields()
}

</script>