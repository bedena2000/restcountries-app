<template>
  <div v-show="props" :class="$style.wrapper">
    <div :class="$style.flag">
      <img :src="props.flag" alt="flagIcon" />
    </div>

    <div :class="$style.name">
      {{ props.name }}
    </div>

    <div :class="$style.population">
      {{ props.population }}
    </div>

    <div :class="$style.area">
      {{ props.area }}
    </div>

    <div :class="$style.region">
      {{ props.region }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  flag: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  population: {
    type: Number,
    required: true
  },

  area: {
    type: Number,
    required: true
  },

  region: {
    type: String,
    required: true
  }
})




</script>

<style module>
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 12px;
  align-items: center;
}

.wrapper:hover {
  background-color: var(--color-1);
  border-radius: 14px;
}

.flag {
  width: 60px;
  height: 40px;
  overflow: hidden;
  border-radius: 4px;
}

.flag > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.name {
  font-size: 18px;
  font-weight: medium;
  color: var(--color-5);
}

.population {
  font-size: 18px;
  font-weight: medium;
  color: var(--color-5);
}

.area {
  font-size: 18px;
  font-weight: medium;
  color: var(--color-5);
}

.region {
  font-size: 18px;
  font-weight: medium;
  color: var(--color-5);
}
</style>
