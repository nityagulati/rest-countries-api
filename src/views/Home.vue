<template>
    <FilterBar @getRegion="getRegion" @getSearch="getSearch"></FilterBar>
    <CountryCard :countries="countries"></CountryCard>
</template>

<script>
import FilterBar from '@/components/FilterBar.vue'
import CountryCard from '@/components/CountryCard.vue'

export default {
    components: { 
        FilterBar,
        CountryCard
    },
    data() {
        return {
            initialData: null,
            countries: null
        }
    },
    async created() {
        let data = []
        let API_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,cca3'
        let response = await fetch(API_URL)
        console.log(response.status)
        console.log(response.statusText)
        if(response.status === 200) {
          data = await response.json()
          this.initialData = data
          console.log(`${this.initialData.length} countries`)
          console.log(this.initialData)
        }
        this.countries = this.initialData.slice()
    },
    methods: {
        getRegion(region) {
          this.countries = this.initialData.slice()
          if(region !=='All') {
            let filteredCountries = this.countries.filter(country => {
              return country.region === region
            })
            this.countries = filteredCountries
          }
        },
        getSearch(search) {
          this.countries = this.initialData.slice()
          let filteredCountries = this.countries.filter(country => {
            let cap = country.capital[0]
            let capital = cap ? cap.toLowerCase() : ''
            return country.name.common.toLowerCase().includes(search.toLowerCase()) 
            || country.region.toLowerCase().includes(search.toLowerCase())
            || capital.toLowerCase().includes(search.toLowerCase())
          })
          this.countries = filteredCountries
        }
    }
}
</script>

<style scoped>

</style>