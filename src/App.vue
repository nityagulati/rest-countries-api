<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'

export default {
  components: {
    Header,
    Home
  },
  data() {
    return {
      countries: null
    }
  },
  async created() {
    let data = []
    let API_URL = 'https://restcountries.com/v3.1/all'
    let response = await fetch(API_URL)
    console.log(response.status)
    console.log(response.statusText)
    if(response.status === 200) {
      data = await response.json()
      this.countries = data
      console.log(this.countries)
    }
  },
}
</script>

<template>
  <Header></Header>
  <Home :countries="countries"></Home>
</template>

<style scoped>

</style>
