<template>
    <div class="country-container">
        <div class="country-img">
            <img 
                :src="country.flag" 
                alt="`Flag of ${country.name}`" 
                class="flag"
            >
        </div>
        <div class="details">
            <h2>{{country.name}}</h2>
            <div class="meta">
                <p><span>Native Name: </span>{{country.nativeName.common}}</p>
                <p><span>Population: </span>{{country.population}}</p>
                <p><span>Region: </span>{{country.region}}</p>
                <p><span>Sub Region: </span>{{country.subregion}}</p>
                <p><span>Capital: </span>{{country.capital}}</p>
                <p><span>Top Level Domain: </span>{{country.tld}}</p>
                <p><span>Currencies: </span>{{country.currencies}}</p>
                <p><span>Languages: </span>{{country.languages}}</p>
            </div>
            <div class="borders">
                <p>Border Countries:</p>
                <div class="border-buttons" v-if="country.borders.length">
                    <div
                        v-for="(border, index) in country.borders"
                        :key="index"
                        role="link"
                        class="btn btn--border shadow rounded"
                        @click="getBorderCountry(border)"
                    >
                        {{border}}
                    </div>
                </div>
                <div v-else>Unknown</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            country: null
        }
    },
    created() {
        this.country = this.countries.find((c) => c.name === this.$route.params.name)
        console.log(this.country)
    },
    computed: {
        countries() {
            return this.$store.state.countries
        }
    },
    methods: {
        getBorderCountry(border) {
            this.country = this.countries.find((c) => c.cca3 === border)
            this.$router.push(
                {
                    path: `/rest-countries-api/${this.country.name}`
                }
            )
        }
    }
}
</script>

<style scoped>
.country-img {
    width: 100%;
    height: auto;
    margin-bottom: 44px;
}

img.flag {
    width: 100%;
}

h2 {
    font-weight: var(--font-weight-bold);
}

.meta {
    margin-top: 16px;
    margin-bottom: 34px;
}

.meta span {
    font-weight: var(--font-weight-semi);
}

.borders p {
    font-weight: var(--font-weight-semi);
}

.border-buttons {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.btn--border {
    width: 110px;
    height: auto;
    padding: 6px 24px;
}

@media screen and (min-width: 375px) {
    .country-img {
        width: 320px;
        height: 229px;
    }    
}

@media screen and (min-width: 768px) {
    .country-img {
        width: 560px;
        height: 401px;
    }

    .meta {
        margin-top: 23px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 120px;
        column-gap: 40px;
    }
}

@media screen and (min-width: 1024px) {
    .country-container {
        display: flex;
        column-gap: 60px;
    }
}

@media screen and (min-width: 1220px) {
    .country-container {
        align-items: center;
        column-gap: 100px;
    }

    .meta {
        margin-bottom: 68px;
    }

    .borders {
        display: flex;
        gap: 10px;
    }

    .border-buttons {
        margin-top: 0;
        flex: 2;
    }
}

@media screen and (min-width: 1440px) {
    .country-container {
        column-gap: 120px;
    } 
}
</style>

