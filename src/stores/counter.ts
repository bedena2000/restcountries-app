import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Country {
  flags: {
    svg: string
  }
  name: {
    common: string
  },
  population: string
  area: string
  region: string
}

export const useCountriesData = defineStore('countriesData', () => {
  const chosenRegion = ref('')
  const sortBy = ref('Population')
  const list = ref<Country[]>([])

  const changeChosenRegion = (newRegion: string) => (chosenRegion.value = newRegion)

  const changeSortBy = (newSortOption: string) => (sortBy.value = newSortOption)

  const changeList = (newList: Country[]) => (list.value = newList)

  return {
    chosenRegion,
    sortBy,
    list,

    changeChosenRegion,
    changeSortBy,
    changeList
  }
})
