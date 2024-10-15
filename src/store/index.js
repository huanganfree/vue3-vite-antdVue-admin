import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useUnReadNumStore = defineStore('unReadNum', () => {
  const unReadNum = ref(12)
  function increment() {
    unReadNum.value++
  }
  function decrement() {
    if(unReadNum.value >= 1)
    unReadNum.value--
  }
  return { unReadNum, decrement, increment }
})