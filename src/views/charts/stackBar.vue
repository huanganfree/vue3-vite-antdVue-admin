<template>
    <div class="wrapper" ref="containerRef">
    </div>
</template>

<script setup>
import * as echarts from "echarts";

import { useChartsBuild } from "./useChartsBuild";

const {
    containerRef
} = useChartsBuild(initData)

const payload = {
    id: '',
    data: {
        title: ['生态指数'],
        unit: ['%'],
        x: ['1月', '2月', '3月', '4月' ],
        data1: [20, 80, 100, 40, 34, 90, 60, 20, 80, 100, 40, 34],
    },
};

const unit = payload.data.unit || [];
const x = payload.data.x || [];
const data1 = payload.data.data1 || [];
const title = payload.data.title || [];

function initData(myChart) {
    let option = {
        // backgroundColor: '#001037',
        grid: {
            top: 35,
            left: 15,
            right: 15,
            bottom: 10,
            // 是否包含文本
            containLabel: true,
        },
        tooltip: {
            // 触发类型  经过轴触发axis  经过轴触发item
            trigger: 'axis',
            backgroundColor: 'rgba(9, 30, 60, 0.6)',
            extraCssText: 'box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset;',
            borderWidth: 0,
            confine: false,
            appendToBody: true,
            textStyle: {
                color: '#fff',
                fontSize: 10,
            },
            // 轴触发提示才有效
            axisPointer: {
                type: 'shadow',
            },
            shadowStyle: {
                color: 'rgba(157, 168, 245, 0.1)',
            },

            formatter: (data) => {
                var tip = '<h5 class="echarts-tip-h5">' + data[0].name + '</h5>';
                data.forEach((item) => {
                    let unit = '';
                    if (item.seriesType === 'bar') {
                        tip += '<div class="echarts-tip-div">';
                        tip += '<div class="left">' + item.marker + item.seriesName + '：</div>';
                        tip += '<div class="right">' + item.value + unit + '</div>';
                        tip += '</div>';
                    }
                });
                return tip;
            },
        },
        xAxis: {
            data: x,
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#4176a3',
                    width: '0.5', //坐标线的宽度
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#fff', //底部文字颜色
                    fontSize: 12,
                },
            },
        },
        yAxis: [
            {
                name: '单位: ' + unit[0],
                nameTextStyle: {
                    align: 'left',
                    fontSize: 11,
                    color: '#4176a3',
                },
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'transparent', //左边框颜色
                    },
                },
                splitLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                    show: true,
                    fontSize: 12,
                    textStyle: {
                        color: '#ADD6FF', //左文字颜色
                    },
                },
            },
        ],
        series: [
            {
                name: title[0],
                type: 'bar',
                barWidth: 30,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(21,136,209,0.1)',
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#1893FE', //渐变1
                        },
                        {
                            offset: 1,
                            color: '#1EE3E8', //渐变2
                        },
                    ]),
                },
                data: data1,
                z: 0,
                zlevel: 0,
            },
            {
                type: 'pictorialBar',
                barWidth: 30,
                itemStyle: {
                    color: '#021C46', //数据的间隔颜色
                },
                symbolRepeat: 'true',
                symbolMargin: 3,
                symbol: 'rect',
                symbolSize: [30, 4],
                data: data1,
                z: 1,
                zlevel: 0,
                label: {
                    show: true,
                    position: 'top',
                    fontSize: 14,
                    color: '#fff', //柱状顶部文字颜色
                    formatter: function (params) {
                        return params.data;
                    },
                }
            },
        ],
    };
    myChart.setOption(option);
}

</script>
<style lang="less">
.tooltip-wrapper {
    padding: 10px;
    border-radius: 6.833px;
    border: 0.854px solid rgba(255, 255, 255, 0.40);
    background: linear-gradient(180deg, rgba(88, 169, 255, 0.47) 0%, rgba(63, 83, 248, 0.47) 100%);
    box-shadow: 0px 3.417px 25.625px 0px rgba(5, 21, 71, 0.25);
    backdrop-filter: blur(12.812499046325684px);

    .flex {
        display: flex;
        align-items: center;
    }

    .marginRight {
        margin-right: 8px;
    }

    .city-total {
        margin-bottom: 7px;
        font-size: 17.083px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: #fff;



        .city-name {
            justify-content: space-between;

        }

    }

    .type {

        .one-name,
        .two-name {
            color: rgba(255, 255, 255, 0.70);
            font-size: 11.958px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        .type-value {
            color: #fff;
            font-size: 11.958px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }

}
</style>
<style lang="less" scoped>
.wrapper {
    width: 398px;
    height: 506px;
    border-radius: 18px;
    border: 0.854px solid #4E6AC4;
}
</style>