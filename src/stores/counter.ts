import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCountriesData = defineStore('countriesData', () => {
  const chosenRegion = ref('')
  const sortBy = ref('Population')
  const list = ref([])

  const changeChosenRegion = (newRegion: string) => (chosenRegion.value = newRegion)

  const changeSortBy = (newSortOption: string) => (sortBy.value = newSortOption)

  const changeList = (newList) => (list.value = newList)

  return {
    chosenRegion,
    sortBy,
    list,

    changeChosenRegion,
    changeSortBy,
    changeList
  }
})
