<template>
    <div class="wrapper" ref="containerRef">
    </div>
</template>

<script setup>
import { useChartsBuild } from "./useChartsBuild";

const {
    containerRef
} = useChartsBuild(initData)

function initData(myChart) {
    var data = [
        {
            "name": "短信",
            "value": 1369
        }, {
            "name": "客服",
            "value": 1589
        }, {
            "name": "外呼",
            "value": 1845
        }, {
            "name": "网厅",
            "value": 1476
        }, {
            "name": "手厅",
            "value": 2997
        }
    ]

    var max = Math.max(...data.map(item => item.value)) + 1000

    function getData(data) {
        let res = {
            series: [],
            yAxis: []
        };
        for (let i = 0; i < data.length; i++) {
            res.series.push({
                name: i,
                type: 'pie',
                clockWise: false,
                hoverAnimation: false,
                radius: [62 - i * 8 + '%', 58 - i * 8 + '%'],
                center: ["50%", "50%"],
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                },
                data: [
                    {
                        value: max - data[i].value,
                        name: '',
                        itemStyle: {
                            color: '#2C303C',
                        }
                    },
                    {
                        value: data[i].value,
                        name: data[i].name,
                        itemStyle: {
                            borderRadius: 10,
                            borderJoin: 'miter',
                            borderMiterLimit: 20,
                            color: 'red'
                        }
                    }
                ]
            });
        }
        return res;
    }

    var optionData = getData(data)
    const option = {
        tooltip: {
            show: false,
        },
        backgroundColor: 'rgb(33,38,51)',
        series: optionData.series
    }
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

.topWrapper {
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