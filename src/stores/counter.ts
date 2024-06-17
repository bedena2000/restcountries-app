import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface Country {
  flags: {
    svg: string
  }
  name: {
    common: string
  }
  population: string
  area: string
  region: string
  capital:
    | {
        0: string
      }[]
    | string[]
    | undefined
}

export const useCountriesData = defineStore('countriesData', () => {
  const chosenRegion = ref('')
  const sortBy = ref('Population')
  const list = ref<Country[]>([])
  const searchValue = ref('')

  const changeChosenRegion = (newRegion: string) => (chosenRegion.value = newRegion)

  const changeSortBy = (newSortOption: string) => (sortBy.value = newSortOption)

  const changeList = (newList: Country[]) => (list.value = newList)

  const changeSearchValue = (newSearchValue: string) => (searchValue.value = newSearchValue)

  return {
    chosenRegion,
    sortBy,
    list,
    searchValue,

    changeChosenRegion,
    changeSortBy,
    changeList,
    changeSearchValue
  }
})
