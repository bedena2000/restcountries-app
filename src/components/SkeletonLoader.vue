<template>
  <div :class="$style.wrapper">
    <div :class="$style.image"></div>

    <div :class="$style.name"></div>

    <div :class="$style.population"></div>

    <div :class="$style.area"></div>

    <div :class="$style.region"></div>
  </div>
</template>

<script setup></script>

<style module>
.wrapper {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  column-gap: 12px;
  height: 70px;
  text-align: center;
  padding: 12px;
}

.image {
  background-color: var(--color-1);
  width: 60px;
  height: 40px;
  overflow: hidden;
  border-radius: 4px;
  animation: skeleton-loading 1s linear infinite;
}

.name {
  background-color: var(--color-1);
  height: 10px;
  animation: skeleton-loading 1s linear infinite;
}

.population {
  background-color: var(--color-1);
  height: 10px;
  animation: skeleton-loading 1s linear infinite;
}

.area {
  background-color: var(--color-1);
  height: 10px;
  animation: skeleton-loading 1s linear infinite;
}

.region {
  background-color: var(--color-1);
  height: 10px;
  animation: skeleton-loading 1s linear infinite;
}

@keyframes skeleton-loading {
  0% {
    background-color: var(--color-2);
  }
  100% {
    background-color: var(--color-1);
  }
}
</style>
