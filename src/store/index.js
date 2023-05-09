/*jshint -W033 */

import { createStore } from 'vuex'

export default createStore({
    state: {
        countries: [],
        isNotFound: false,
        API_URL: 'https://restcountries.com/v3.1/all?fields=name,capital,population,region,subregion,flags,cca3,tld,currencies,languages,borders'
    },
    mutations: {
        SET_COUNTRIES(state, countries) {
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
        },
        SET_NOT_FOUND(state, isNotFound) {
            state.isNotFound = isNotFound
        },
        SET_API_URL(state, API_URL) {
            state.API_URL = API_URL
        }
    },
    actions: {
        fetchAllCountries({commit}) {      
            return fetch(this.state.API_URL)
            .then((response) => response.json())
            .then((data) => {
                commit('SET_COUNTRIES', data)
                return this.state.countries
            })
            .catch((error) => console.log(error))
        },
        fetchSearch({commit, dispatch}, searchInput) {
            return fetch(this.state.API_URL)
            .then(async (response) => {
                if (searchInput.length > 0) {
                    const data = await response.json()
                    let filteredCountries = data.filter(country => {
                        return country.name.common.toLowerCase().includes(searchInput.toLowerCase())
                    })
                    if (filteredCountries.length > 0) {
                        commit('SET_NOT_FOUND', false)
                        commit('SET_COUNTRIES', filteredCountries)
                    } else {
                        commit('SET_NOT_FOUND', true)
                    }
                } else {
                    commit('SET_NOT_FOUND', false)
                    dispatch('fetchAllCountries')
                }
            })
        },
        fetchRegion({commit, dispatch}, region) {
            if (region !== 'All') {
                let NEW_URL = `https://restcountries.com/v3.1/region/${region}?fields=name,capital,population,region,subregion,flags,cca3,tld,currencies,languages,borders`
                commit('SET_API_URL', NEW_URL)
                dispatch('fetchAllCountries')
            } else {
                let NEW_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,population,region,subregion,flags,cca3,tld,currencies,languages,borders'
                commit('SET_API_URL', NEW_URL)
                dispatch('fetchAllCountries')
            }
        }
    },
    getters: {
        getCountries(state) {
            return state.countries
        },
        getNotFound(state) {
            return state.isNotFound
        }
    }
})