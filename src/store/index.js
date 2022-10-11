/*jshint -W033 */

import { createStore } from 'vuex'

export default createStore({
    state: {
        countries: []
    },
    mutations: {
        setCountries(state, countries) {
            state.countries = countries.map(country => {
                return {
                    name: country.name.common,
                    nativeName: Object.values(country.name.nativeName)[0],
                    capital: country.capital[0],
                    population: country.population.toLocaleString(),
                    region: country.region,
                    subregion: country.subregion,
                    flag: country.flags.svg,
                    cca3: country.cca3,
                    tld: country.tld.join(', '),
                    currencies: Object.keys(country.currencies).join(', '),
                    languages: Object.values(country.languages).join(', '),
                    borders: country.borders
                }
            })
        }
    },
    actions: {
        fetchCountries({commit}) {
            const API_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,population,region,subregion,flags,cca3,tld,currencies,languages,borders'

            return fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                commit('setCountries', data)
            })
            .catch((error) => console.log(error))
        }
    },
    getters: {
        countries(state) {
            return state.countries
        }
    }
})