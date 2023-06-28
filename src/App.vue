<template>
  <main>
    <router-link to="/">
      home
    </router-link>
    <router-link to="/about">
      about
    </router-link>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
