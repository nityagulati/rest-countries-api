<template>
    <FilterBar @getRegion="getRegion" @getSearch="getSearch"></FilterBar>
    <CountryCard></CountryCard>
</template>

<script>
import FilterBar from '@/components/FilterBar.vue'
import CountryCard from '@/components/CountryCard.vue'

export default {
    components: { 
        FilterBar,
        CountryCard
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