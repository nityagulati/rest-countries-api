<template>
<div class="card-container">
    <div v-if="notFound">
        <h2>No countries found</h2>
    </div>
    <div 
        v-else
        class="card shadow rounded" 
        v-for="(country, index) in countries" 
        :key="index"
        role="link"
        @click="goToCountry(country.name)"
    >
        <div class="card-image shadow">
            <img 
                class="flag rounded-img" 
                :src="country.flag" 
                alt="`Flag of ${country.name}`"
            >
        </div>
        <div class="card-content">
            <p class="name">
                {{country.name}}
            </p>
            <p class="population meta"><span>Population: </span>
                {{country.population}}
            </p>
            <p class="region meta"><span>Region: </span>
                {{country.region}}
            </p>
            <p class="capital meta"><span>Capital: </span>
                {{isCapital(country.capital)}}
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('fetchAllCountries')
    },
    computed: {
        countries() {
            return this.$store.getters.getCountries
        },
        notFound() {
            return this.$store.getters.getNotFound
        }
    },
    methods: {
        isCapital(capital) {
            return capital ? capital : 'N/A'
        },
        goToCountry(name) {
            this.$router.push(
                {
                    name: 'country',
                    params: { name }
                }
            )
        }
    }
}
</script>

<style scoped>
.card-container {
    display: grid;
    grid-template-columns: minmax(auto, 240px);
    grid-template-rows: auto;
    justify-content: center;
    grid-gap: 75px;
}

.card {
    background: var(--color-background);
    padding-bottom: 45px;
    transition: 1s ease;
}

.card:hover {
    transform: scale(1.1);
    transition: 1s ease;
}

.card-image {
    margin-bottom: 24px;
    width: 264px;
    height: 160px;
}

img.flag {
    width: 100%;
    height: 100%;
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

@media screen and (min-width: 375px) {
    .card-container {
        grid-template-columns: minmax(auto, 264px);
    } 
}

@media screen and (min-width: 768px) {
    .card-container {
        grid-template-columns: repeat(auto-fill, minmax(264px, 264px));
    } 
}

</style>