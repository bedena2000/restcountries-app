<template>
  <div :class="$style.wrapper">
    <div>
      <p :class="$style.title">Sort By</p>

      <div :class="$style.sortOptions">
        <p @click="isSortedOpen = !isSortedOpen">{{ data.sortBy }}</p>

        <div v-show="isSortedOpen" :class="$style.selectWrapper">
          <div @click="sortedModal('Population')" :class="$style.selectItem">Population</div>
          <div @click="sortedModal('Area')" :class="$style.selectItem">Area</div>
        </div>
      </div>
    </div>

    <div>
      <p :class="$style.title">Region</p>
      <div :class="$style.regionOptions">
        <p
          :style="{ background: data.chosenRegion === 'Americas' ? '#1B1D1F' : '' }"
          @click="data.changeChosenRegion('Americas')"
          :class="`${$style.regionItem} top-1`"
        >
          Americas
        </p>
        <p
          :style="{ background: data.chosenRegion === 'Antarctic' ? '#1B1D1F' : '' }"
          @click="data.changeChosenRegion('Antarctic')"
          :class="`${$style.regionItem} top-2`"
        >
          Antarctic
        </p>
        <p
          :style="{ background: data.chosenRegion === 'Africa' ? '#1B1D1F' : '' }"
          @click="data.changeChosenRegion('Africa')"
          :class="`${$style.regionItem} middle-1`"
        >
          Africa
        </p>
        <p
          :style="{ background: data.chosenRegion === 'Asia' ? '#1B1D1F' : '' }"
          @click="data.changeChosenRegion('Asia')"
          :class="`${$style.regionItem} middle-2`"
        >
          Asia
        </p>
        <p
          :style="{ background: data.chosenRegion === 'Europe' ? '#1B1D1F' : '' }"
          @click="data.changeChosenRegion('Europe')"
          :class="`${$style.regionItem} middle-3`"
        >
          Europe
        </p>
        <p
          :style="{ background: data.chosenRegion === 'Oceania' ? '#1B1D1F' : '' }"
          @click="data.changeChosenRegion('Oceania')"
          :class="`${$style.regionItem} bottom`"
        >
          Oceania
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCountriesData } from '@/stores/counter'

const data = useCountriesData()

const sortedOption = ref('Population')
const isSortedOpen = ref(false)
const sortedModal = (newSortedValue) => {
  isSortedOpen.value = !isSortedOpen.value
  data.changeSortBy(newSortedValue)
}
</script>

<style module>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.title {
  color: var(--color-4);
  font-size: 12px;
  margin-bottom: 12px;
}

.sortOptions {
  width: 240px;
  outline: none;
  background-color: var(--color-2);
  color: var(--color-5);
  border: 1px solid var(--color-4);
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s ease;
  position: relative;
}

.sortOptions > p {
  padding: 8px 12px;
}

.selectWrapper {
  position: absolute;
  z-index: 2;
  width: 240px;
  bottom: -100px;
  left: 0px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: var(--color-1);
  padding: 6px;
  border: 1px solid var(--color-1);
  border-radius: 12px;
}

.selectItem {
  background-color: var(--color-1);
  color: var(--color-5);
  border: 1px solid var(--color-4);
  cursor: pointer;
  transition: 0.3s ease;
  border-radius: 12px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
}

.sortOptions > p {
  font-size: 14px;
  font-weight: 500;
}

.selectItem:hover {
  background-color: var(--color-2);
}

.regionOptions {
  display: grid;
  row-gap: 12px;
  column-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

@media (max-width: 1024px) {
  .regionOptions {
    grid-template-columns: repeat(6, 1fr);
  }
  
  .sortOptions {
    width: 100%;
  }

  .selectWrapper {
    width: 100%;
  }

  .wrapper {
    width: 100%;
  }

}

@media (max-width: 640px) {
  .regionOptions {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
  }
}

@media (max-width: 450px) {
  .regionOptions {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
}

.regionItem {
  padding: 12px;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 12px;
}

.regionItem:hover {
  background-color: var(--color-1);
}
</style>
