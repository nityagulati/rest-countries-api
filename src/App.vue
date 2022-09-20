<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import FilterBar from './components/FilterBar.vue'

export default {
  components: {
    Header,
    Home,
    FilterBar
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
    }
    this.countries = this.initialData.slice()
  },
  methods: {
    getRegion(region) {
      this.countries = this.initialData.slice()
      let filteredCountries = this.countries.filter(country => {
        return country.region === region
      })
      this.countries = filteredCountries
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

<template>
  <Header></Header>
  <FilterBar @getRegion="getRegion" @getSearch="getSearch"></FilterBar>
  <Home :countries="countries"></Home>
</template>

<style>
.container, .container--wide {
  padding: 30px;
}

@media screen and (max-width:767px) {
  .container--wide {
    padding: 30px 15px;
  } 
}

@media screen and (min-width:360px) {
  .container {
    padding: 30px 55px;
  }
}

@media screen and (min-width:768px) {
  .container {
    padding: 30px 80px;
  }
}
</style>
