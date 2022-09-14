<template>
<div class="container">
    <div class="card" v-for="(country, index) in this.countries" :key="index">
        <div class="card-content">
            <p class="name">
                {{country.name.common}}
            </p>
            <p class="population meta"><span>Population: </span>
                {{country.population}}
            </p>
            <p class="region meta"><span>Region: </span>
                {{country.region}}
            </p>
            <p class="capital meta"><span>Capital: </span>
                {{country.capital[0]}}
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        countries: Object,
    }
}
</script>