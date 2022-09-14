<template>
<div v-for="country in this.countries" :key="country">
    <p>{{country.name.common}}</p>
    <p>Population: {{country.population}}</p>
    <p>Region: {{country.region}}</p>
    <p>Capital: {{country.capital}}</p>
</div>
</template>

<script>
export default {
    props: {
        countries: Array
    }
}
</script>

<style scoped>

</style>

