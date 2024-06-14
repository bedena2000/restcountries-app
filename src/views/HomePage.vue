<template>
  <div :class="$style.main">
    
    <SearchBar />

  </div>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue';
</script>

<style module>
.main {
  position: relative;
  z-index: 2;
  color: white;
  background-color: var(--color-2);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 1200px;
  margin: 0 auto;
  transform: translateY(-60px);
  padding: 40px 30px;
  border-radius: 14px;
  border: 0.1px solid #5d5a5a;
  overflow: scroll;
  height: calc(100vh - 300px);
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: var(--color-2);
  margin-top: 24px;
  margin-bottom: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
}

::-webkit-scrollbar-thumb {
  background: var(--color-1);
  border-radius: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
