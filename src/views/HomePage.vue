<template>
  <div :class="$style.main">
    <div v-show="!isError && !isLoading">
      <SearchBar />

      <div :class="$style.mainWrapper">
        <SearchOptions />
        <div :class="$style.listWrapper">
          <CountryItem
            v-for="item in store.list"
            v-bind:key="item.population"
            :flag="item.flags.svg"
            :name="item.name.common"
            :population="item.population"
            :area="item.area"
            :region="item.region"
          />
          <div v-show="isLoading" :class="$style.loadingWrapper">
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </div>
        </div>
      </div>
    </div>

    <p v-show="isError && !isLoading" :class="$style.errorMessage">
      😓 Something Went Wrong. please try again
    </p>

    <p v-show="!isError && isLoading" :class="$style.loadingMessage">Loading content...</p>
  </div>
</template>

<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import SearchOptions from '@/components/SearchOptions.vue'
import CountryItem from '@/components/CountryItem.vue'
import SkeletonLoader from '@/components/SkeletonLoader.vue'
import services from '@/services'
import { ref } from 'vue'
import { useCountriesData } from '@/stores/counter'

const store = useCountriesData()

const isError = ref(false)
const isLoading = ref(false)

const getCountries = async () => {
  isLoading.value = true
  try {
    const data = await services.getAllCountries()
    const result = await data.json()
    store.changeList(result)
    isError.value = false
  } catch (error) {
    isError.value = true
  } finally {
    isLoading.value = false
  }
}

getCountries()
</script>

<style module>
.main {
  position: relative;
  z-index: 2;
  color: white;
  background-color: var(--color-2);
  width: 1200px;
  margin: 0 auto;
  transform: translateY(-60px);
  padding: 40px 30px;
  border-radius: 14px;
  border: 0.1px solid #5d5a5a3d;
  height: calc(100vh - 300px);
  overflow-x: hidden;
}

.loadingWrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.listWrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 70vh;
  overflow: scroll;
  width: 100%;
}

.errorMessage,
.loadingMessage {
  font-size: 38px;
  font-weight: bold;
  position: absolute;
  top: 50px;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}

@media (max-width: 1280px) {
  .main {
    width: 90%;
  }

  .errorMessage {
    font-size: 24px;
  }
}

@media (max-width: 1024px) {
  .errorMessage {
    font-size: 18px;
  }
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

.mainWrapper {
  display: flex;
  gap: 24px;
  margin-top: 42px;
}
</style>
