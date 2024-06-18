<template>
  <div :class="$style.main">
    <div v-show="!isError && !isLoading">
      <SearchBar />

      <div :class="$style.mainWrapper">
        <SearchOptions />
        <div v-show="finalList.length > 0" :class="$style.listWrapper">
          <div :class="$style.countryListTop">
            <div :class="$style.flag">
              <p>Flag</p>
            </div>

            <div :class="$style.name">
              <p>Name</p>
            </div>

            <div :class="$style.population">
              <p>Population</p>
            </div>

            <div :class="$style.area">
              <p>Area</p>
            </div>

            <div :class="$style.region">
              <p>Region</p>
            </div>
          </div>
          <div v-if="finalList.length === 0">
            <CountryItem
              v-for="item in originalList"
              v-bind:key="item.population"
              :flag="item.flags.svg"
              :name="item.name.common"
              :population="item.population"
              :area="item.area"
              :region="item.region"
              :capital="item.capital"
            />
          </div>
          <div v-else>
            <CountryItem
              v-for="item in finalList"
              v-bind:key="item.population + item.area"
              :flag="item.flags.svg"
              :name="item.name.common"
              :population="item.population"
              :area="item.area"
              :region="item.region"
              :capital="item.capital"
            />
          </div>
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
import { ref, watch, computed } from 'vue'
import { useCountriesData } from '@/stores/counter'
import { off } from 'process'
import { Country } from '@/stores/counter'

const store = useCountriesData()

const searchValue = store.searchValue
const sortValue = store.sortBy
const sortRegion = store.chosenRegion

const isError = ref(false)
const isLoading = ref(false)
const originalList = ref<Country[] | []>([])
const finalList = ref<Country[] | []>([])

const getCountries = async () => {
  isLoading.value = true
  try {
    const data = await services.getAllCountries()
    const result = await data.json()
    finalList.value = result
    originalList.value = result
    isError.value = false
  } catch (error) {
    isError.value = true
  } finally {
    isLoading.value = false
  }
}

const combinedProperties = computed(() => ({
  searchValue: store.searchValue,
  sortBy: store.sortBy,
  chosenRegion: store.chosenRegion
}))

watch(combinedProperties, ({ searchValue, sortBy, chosenRegion }) => {
  if (!chosenRegion) {
    if (sortBy === 'Population') {
      finalList.value = originalList.value.sort((a, b) => b.population - a.population)
    } else {
      finalList.value = originalList.value.sort((a, b) => b.area - a.area)
    }
  }
  if (chosenRegion) {
    if (sortBy === 'Population') {
      finalList.value = originalList.value
        .sort((a, b) => b.population - a.population)
        .filter((item) => item.region === chosenRegion)
    } else {
      finalList.value = originalList.value
        .sort((a, b) => b.area - a.area)
        .filter((item) => item.region === chosenRegion)
    }
  }

  if (searchValue) {
    services
      .findCountryByName(searchValue)
      .then((result) => result.json())
      .then((data) => {
        finalList.value = data
      })
  }
  store.changeSearchValue('')
})

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

.countryListTop {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 12px;
  align-items: center;
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

  .mainWrapper {
    flex-direction: column;
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

@media (max-width: 1280px) {
  .countryListTop {
    grid-template-columns: repeat(4, 1fr);
  }

  .region {
    display: none;
  }
}
</style>
