export const apiUrl = 'https://restcountries.com/v3.1'

export default {
  getAllCountries() {
    return fetch(`${apiUrl}/all`)
  },

  findCountryByCapital(name: string) {
    return fetch(`${apiUrl}/capital/${name}`)
  },

  findCountryByName(name: string) {
    return fetch(`${apiUrl}/name/${name}`)
  }
}
