import { onMounted, onUnmounted, ref } from "vue";
import * as echarts from "echarts";

export function useChartsBuild(initData) {
    const containerRef = ref(null);
    let myChart = null
    onMounted(() => {
        myChart = echarts.init(containerRef.value);
        initData(myChart)
        window.addEventListener('resize', myChart.resize)
    });

    onUnmounted(() => {
        window.removeEventListener('resize', myChart.resize)
    })

    return {
        containerRef
    }
}