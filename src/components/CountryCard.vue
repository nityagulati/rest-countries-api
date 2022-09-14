<template>
<div class="container">
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
                {{country.population}}
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
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
}

.card {
    background: var(--color-background);
    padding-bottom: 45px;
    flex: 1 0 20%;
    box-shadow: var(--box-shadow);
    border-radius: 5px;
}

.card-image.flag {
    box-shadow: var(--box-shadow);
    border-radius: 5px 5px 0px 0px;
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

</style>