<template>
  <div :class="$style.banner">
    <img :class="$style.logo" src="/Logo.svg" alt="MainLogo">
  </div>
</template>

<script setup>

</script>

<style module>

.banner {
  background-image: url('/hero-image-wr.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  z-index: 1;
}

</style>