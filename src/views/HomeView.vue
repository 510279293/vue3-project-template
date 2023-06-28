<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

<template>
  <main>
    <div>{{counter.count}} 看吧，子组件变动我会更新</div>
    <HelloWorld msg="hello " />
  </main>
</template>
