<template>
    <div class="wrapper" ref="containerRef">
    </div>
</template>

<script setup>
import * as echarts from "echarts";
import { useChartsBuild } from "./useChartsBuild";
import FetchJPG from '@/assets/images/fetch.jpg';



const {
    containerRef
} = useChartsBuild(initData)


function initData(myChart) {
    let option = {
        tooltip: {
            show: true
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        barWidth: 18,
        series: [
            {
                data: [60, 60, 60, 80, 70, 110, 130],
                type: 'bar',
                backgroundStyle: {
                    color: 'rgba(30, 49, 189, .05)'
                },
                itemStyle: {
                    borderRadius: 20,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                        {
                            offset: 0,
                            color: '#00F6FF'
                        },
                        {
                            offset: 0.234,
                            color: '#00F6FF'
                        },
                        {
                            offset: 1,
                            color: '#0048FF'
                        }
                    ])
                },// 重点是 下方代码
                emphasis: {
                    label: {
                        show: true,
                        position: 'top',
                        formatter: function () { // 返回不了标签
                            let htmlText = `<div class="topWrapper">哈哈</div>`
                            return htmlText
                        }
                    }
                },
            }
        ]
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

.topWrapper{
    color: red;
    font-size: 23px;
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