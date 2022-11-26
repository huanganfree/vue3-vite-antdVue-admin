import { ref } from 'vue'
// 组合式函数
export function useFetch() {
  const data = ref(0)

  setTimeout(() => {
    ++data.value
  }, 1000);

  return { data }
}
