<template>
    <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol" ref="formRef">
        <a-form-item :label="`${item.label}:`" v-for="item in FormItemConfig" :key="item.name" :name="item.vModel"
            :rules="item.rules">
            <a-input v-if="item.type == 'input'" v-model:value="formState[item.vModel]"
                :placeholder="item.placeholder || '请输入'" :disabled="item.disabled" />
            <a-radio-group v-if="item.type == 'radio-group'" :placeholder="item.placeholder || '请选择'"
                :options="item.options" v-model:value="formState[item.vModel]" :disabled="item.disabled" />
            <a-select v-if="item.type == 'single-select'" :options="item.options" v-model:value="formState[item.vModel]"
                :placeholder="item.placeholder || '请选择'" :disabled="item.disabled" />
            <a-input-number v-if="item.type == 'input-number'" v-model:value="formState[item.vModel]"
                :placeholder="item.placeholder || '请输入'" :min="1" :disabled="item.disabled" />
            <a-tree-select v-if="item.type == 'tree-select'" v-model:value="formState[item.vModel]" show-search :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                :placeholder="item.placeholder" allow-clear tree-default-expand-all :tree-data="item.options" />
                <a-switch v-if="item.type == 'switch'" v-model:checked="formState[item.vModel]" />
        </a-form-item>
    </a-form>
</template>
<script setup>
/**
 * 动态表单:
 * 2.满足校验
 * 3.满足默认值
 */
import { ref, watch } from 'vue';
import _ from 'lodash'

const props = defineProps({
    labelCol: {
        default: () => ({ span: 5 })
    },
    wrapperCol: {
        default: () => ({ span: 16 })
    },
    FormItemConfig: {
        type: Array,
        default: () => []
    },
    formEditData: {
        default: () => ({})
    }
})

const formRef = ref() // 用于表单校验
const formState = ref({})
defineExpose({
    formRef
})

watch(() => props.formEditData, (newVal) => {
    props.FormItemConfig.forEach(item => {
        const { defaultValue, vModel } = item
        formState.value[vModel] = ![undefined, null].includes(newVal[vModel])
            ? _.cloneDeep(newVal[vModel]) : _.cloneDeep(defaultValue) // 深度克隆是必须的
    })
}, { immediate: true })
</script>