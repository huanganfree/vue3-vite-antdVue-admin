<template>
    <div class="wrapper" ref="containerRef">
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from "echarts";
import test from '../../data/jiangsu.json'

console.log(test);

const containerRef = ref(null);
onMounted(() => {
    initData()
});


function initData() {
    var myChart = echarts.init(containerRef.value);
    echarts.registerMap('jiangsu', test); // 注册地图
    let option = {
        tooltip: {
            trigger: "item",
            borderWidth: 0,
            padding: 0,
            formatter: function (params) {
                const { a, b, name } = params.data || {}
                return `<div class="tooltip-wrapper">
                            <div class="flex city-total">
                                <div class="city-name marginRight">${name}</div>
                                <div class="total-value">${a + b}</div>
                            </div>
                            <div class="flex type">
                                <div class="one-name marginRight">${'展项资源'}</div>
                                <div class="type-value">${a}</div>
                            </div>
                            <div class="flex type">
                                <div class="two-name marginRight">${'内容资源'}</div>
                                <div class="type-value">${b}</div>
                            </div>
                        </div>`
            }
        },
        series: [
            {
                type: "map",
                map: 'jiangsu', // 引入地图数据
                data: [
                    {
                        name: "盐城市",
                        a: 21, // 展项
                        b: 22 // 内容
                    },
                ],
                itemStyle: {
                    color: '#fff',
                    areaColor: 'rgb(37, 85, 218)',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 2,
                    shadowOffsetX: 0,
                    shadowOffsetY: 1,
                    borderColor: 'rgb(162, 219, 245)',
                },
                selectedMode: false,
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10,
                    fontWeight: 400
                },
                geo: {
                    rotate: [145, 0]
                },
                // zoom: 1.22,
                layoutSize: '97%',
                layoutCenter: ['50%', '45%'],
                emphasis: {
                    itemStyle: {
                        color: '#fff',
                        borderColor: 'rgb(194, 247, 252)',
                        borderWidth: 3,
                        areaColor: 'rgb(94, 143, 220)'
                    },
                    label: {
                        color: '#fff',
                    }
                }
            }
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