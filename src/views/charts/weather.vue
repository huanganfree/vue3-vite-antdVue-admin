<template>
    <div class="wrapper">
        <h3>和风天气开发</h3>
        <div>获取天气</div>
        <div class="weatherNow">
            <i :class="`qi-${weatherNow.icon}`" ></i>
            <span>{{ weatherNow.temp }}</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
.qi-100{
    color: rgb(237, 209, 0);
}

.weatherNow{
    font-size: 24px;
}
</style>
<script setup>
import axios from "axios";
import { ref } from "vue";

const weatherNow = ref({})

initData()
function initData() {
    axios.get('https://devapi.qweather.com/v7/weather/now', {
        params: {
            key: '0f8a8ab8d75d447cbeda2d305796b448',
            location: '118.80,32.06'
        }
    })
        .then(res => {
            console.log(res);
            const { now, code } = res.data
            if(code == 200) {
                weatherNow.value = {
                    temp: now.temp,
                    icon: now.icon
                }
            }
        })
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