<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { login } from '@/api'
const counter = useCounterStore()
counter.count++
// const add = () => counter.$patch({count: counter.count + 1})
// const sub = () => counter.$patch({count: counter.count - 1})
const add1 = () => counter.increment()
const sub1 = () => counter.count--
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="hello-world">
    <h1 class="green">{{ msg }}</h1>
    <div>================pinna demo================</div>
    <div>Current Count: {{counter.count}} </div>
    <div>
      <button @click="add1">点我+1</button>
      <button @click="sub1">点我-1</button>
    </div>
    <div>================request demo================</div>
    <button @click="login">发起请求</button>
  </div>
</template>

<style lang="less" scoped>
.hello-world{
  .green{
    color: pink
  }
}
</style>