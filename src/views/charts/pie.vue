<template>
    <div class="parent">
        <div class="wrapper" ref="containerRef"></div>
    </div>
</template>

<script setup>
import { useChartsBuild } from "./useChartsBuild";

const {
    containerRef
} = useChartsBuild(initData)


function initData(myChart) {
    let option = {
        series: [{
            radius: [0, '50%'],
            type: 'pie',
            data: [1, 2]
        }]
    }
    myChart.setOption(option);
}


// 绘制自定义标签
function updateLabels(chart) {
    var model = chart.getModel();
    // 获取系列的模型
    var seriesModel = model.getSeriesByIndex(0);
    // 获取系列的数据
    var data = seriesModel.getData();
    data.each(function (idx) {
        // 获取每个数据（扇区）的图形信息
        var layout = data.getItemLayout(idx);

        // 获取视觉引导线的点的坐标
        var labelLinePoints = layout.label?.linePoints;
        if (labelLinePoints?.length) {
            var endPoint = labelLinePoints[2];
            // 创建标签
            var dom = document.createElement('div');
            dom.innerHTML = '我是一个标签<span style="color:red">（label）</span>';
            dom.style.cssText = "position:absolute";
            chart.getDom().appendChild(dom);
            dom.style.left = endPoint[0] + 10 + 'px';
            dom.style.top = endPoint[1] + 'px';
            if (endPoint[0] < labelLinePoints[1][0]) {
                // 右对齐
                dom.style.left = endPoint[0] - dom.clientWidth + 'px';
            }
        }
    });
}

</script>
<style lang="less" scoped>
.parent {
    display: flex; // flex导致echarts布局不在dom节点内
    // width: 700px;
    align-items: center;
}

.wrapper {
    width: 398px;
    height: 506px;
    border-radius: 18px;
    border: 0.854px solid #4E6AC4;

}

.text {
    border: 1px solid;
    width: 200px;
    height: 200px;
}
</style>
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
