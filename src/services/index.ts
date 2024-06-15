export const apiUrl = 'https://restcountries.com/v3.1'

export default {
  getAllCountries() {
    return fetch(`${apiUrl}/all`)
  },

  findCountryByName(name: string) {
    return fetch(`${apiUrl}/name/${name}`)
  }
}
