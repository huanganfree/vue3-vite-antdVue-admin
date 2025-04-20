<template>
    <div class='customAudio'>
        <div class="switch" @click="handleAudioPlay">
            <img :src="PauseBtn" v-if="!isPlay" alt="">
            <img :src="PlayBtn" v-else alt="">
        </div>
        <div class="progress-wrapper"  ref="progressRef" @click="handleMouseClickPosition">
            <div class="progress" :style="progressComputedStyle"></div>
            <div class="play-time">{{ playTime }}</div>
            <div class="total-time">{{ totalTime }}</div>
        </div>
        <a-dropdown :placement="'top'">
            <div class="speed">{{ currentSpeed }}x</div>
            <template #overlay>
                <a-menu>
                    <a-menu-item @click="() => handleChangeSpeed(item)" v-for="item in speedOptions" :key="item" :value="item">
                        <a href="javascript:;">{{ item }}x</a>
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </div>
    <!-- 隐藏的音频 -->
    <audio ref="audioRef" :src="audioSrc"  @timeupdate="handleTimeUpdate" @ended="handleAudioEnd" v-show="false"></audio>
</template>

<script setup>
import PauseBtn from '@/assets/images/pause-btn.svg';
import PlayBtn from '@/assets/images/play-btn.svg';
import { ref, onMounted, computed } from 'vue';
import TaiTan from '@/assets/taitan.mp3'
import qinghua from '@/assets/qinghua.mp3'
import dayjs from 'dayjs';
// 时间插件
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration);

const props = defineProps({
    audioSrc: {
        default: TaiTan
    }
});
const isPlay = ref(false);
const currentSpeed = ref('1');
const speedOptions = ['2', '1.5', '1', '0.5'];
const playTime = ref('00:00');
const totalTime = ref('00:00');
const audioRef = ref(null);
const progressRef = ref(null);
const progressComputedStyle = ref({
    width: '0%',
});

onMounted(() => {
    if (audioRef.value) {
        audioRef.value.addEventListener('loadedmetadata', () => {
            totalTime.value = dayjs.duration(audioRef.value.duration, 'seconds').format('mm:ss')
        });
    }
    
});

function handleMouseClickPosition(ev) {
    console.log(ev);
    const { offsetX } = ev;
    const { width } = progressRef.value.getBoundingClientRect();
    const percentage = offsetX / width;
    audioRef.value.currentTime = percentage * audioRef.value.duration;
    progressComputedStyle.value = {
        width: percentage * 100 + '%',
    };
    playTime.value = dayjs.duration(audioRef.value.currentTime, 'seconds').format('mm:ss')
    isPlay.value = true;
    audioRef.value.play();
}

function handleAudioPlay() {
    isPlay.value = !isPlay.value
    if (isPlay.value) {
        console.log('播放', audioRef.value);
        audioRef.value.play();
    } else {
        audioRef.value.pause();
    }
}

function handleChangeSpeed(item) {
    currentSpeed.value = item;
    audioRef.value.playbackRate = item;
}

function handleTimeUpdate(a, b,c) {
    playTime.value = dayjs.duration(audioRef.value.currentTime, 'seconds').format('mm:ss')
    progressComputedStyle.value = {
        width: (audioRef.value.currentTime / audioRef.value.duration) * 100 + '%',
    };
    
}

function handleAudioEnd() {
    playTime.value = '00:00';
    progressComputedStyle.value = {
        width: '0%',
    };
    isPlay.value = false;
}
</script>

<style scoped lang='less'>
.customAudio {
    display: flex;
    align-items: center;
    width: 50%;
    .switch {
        flex: 0 0 auto;
        img {
            width: 40px;
        }
    }

    .progress-wrapper {
        width: 100%;
        height: 10px;
        background-color: #989898;
        border-radius: 5px;
        margin: 0 10px;
        position: relative;

        .progress {
            // width: 50%;
            height: 100%;
            background-color: #e2e2e2;
            border-radius: 5px;
        }
        .total-time,.play-time {
            color: #252424;
            font-size: 18px;
        }
        .total-time {
            position: absolute;
            right: 0;
            top: 20px;
        }
        .play-time {
            position: absolute;
            left: 0;
            top: 20px;
        }
    }

    .speed {
        color: blue;
        font-weight: bold;
        width: 30px;
        flex: 0 0 30px;
    }
}
</style>