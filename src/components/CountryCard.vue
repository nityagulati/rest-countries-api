<template>
<div class="card-container">
    <div class="card" v-for="(country, index) in this.countries" :key="index">
        <img 
            class="card-image flag" 
            :src="country.flags.svg" 
            alt="`Flag of ${counry.name.common}`"
        >
        <div class="card-content">
            <p class="name">
                {{country.name.common}}
            </p>
            <p class="population meta"><span>Population: </span>
                {{country.population.toLocaleString()}}
            </p>
            <p class="region meta"><span>Region: </span>
                {{country.region}}
            </p>
            <p class="capital meta"><span>Capital: </span>
                {{isCapital(country.capital[0])}}
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        countries: Object,
    },
    methods: {
        isCapital(capital) {
            return capital ? capital : 'N/A'
        } 
    }
}
</script>

<style scoped>
.card-container {
    display: grid;
    grid-template-columns: minmax(auto, 264px);
    grid-template-rows: auto;
    justify-content: center;
    grid-gap: 75px;
}

.card {
    background: var(--color-background);
    padding-bottom: 45px;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
}

.card-image.flag {
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius-img);
    margin-bottom: 24px;
    width: 100%;
    height: 160px;
    object-fit: cover;
}

.card-content {
    padding: 0 24px;
}

.name {
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    margin-bottom: 16px;
}

span {
    font-weight: var(--font-weight-semi);
}

.meta {
    margin-bottom: 8px;
}

@media screen and (min-width: 768px) {
    .card-container {
        grid-template-columns: repeat(auto-fill, minmax(264px, 264px));
    } 
}

</style>