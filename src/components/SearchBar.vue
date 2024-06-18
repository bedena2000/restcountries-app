<template>
  <div :class="$style.wrapper">
    <p :class="$style.countries">Found {{ store.list.length }} countries</p>

    <div v-on:keyup.enter="updateSearchValue" :class="$style.search">
      <img @click="updateSearchValue" src="/Search.svg" alt="search" />
      <input v-model="search" type="text" placeholder="Search by Name" />
    </div>
  </div>
</template>

<script setup>
import services from '@/services'
import { useCountriesData } from '@/stores/counter'
import { ref } from 'vue'

const store = useCountriesData()
const search = ref('')

const updateSearchValue = () => {
  const finalVersion = search.value.trim()
  if (finalVersion.length > 0) {
    store.changeSearchValue(finalVersion)
    search.value = ''
  }
}
</script>

<style module>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.countries {
  color: var(--color-4);
  font-size: 16px;
  font-weight: bold;
}

.search {
  border-radius: 14px;
  width: 300px;
  background-color: var(--color-1);
  display: flex;
  gap: 10px;
  padding: 6px 8px;
}

.search > img {
  cursor: pointer;
}

.search > input {
  outline: none;
  border: none;
  background: transparent;
  color: white;
  font-weight: bold;
  width: 100%;
  padding-right: 14px;
}

.search > input::placeholder {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
}
</style>
