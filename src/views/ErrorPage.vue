<template>
  <div :class="$style.wrapper">
    <p :class="$style.title">Sorry have not found anything</p>
    <router-link to="/" :class="$style.goBack">
      Go back
    </router-link>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style module>
.wrapper {
  width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.title {
  color: white;
  font-size: 24px;
  margin-bottom: 24px;
}

.goBack {
  margin-top: 24px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  background-color: var(--color-1);
  padding: 6px 12px;
  border-radius: 12px;
}
</style>
