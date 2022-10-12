<template>
    <div class="country-container">
        <img 
            :src="country.flag" 
            alt="`Flag of ${country.name}`" 
            class="country-img flag shadow"
        >
        <div class="country-info">
            <h2>{{country.name}}</h2>
            <div class="details">
                <p><span>Native Name: </span>{{country.nativeName.common}}</p>
                <p><span>Population: </span>{{country.population}}</p>
                <p><span>Region: </span>{{country.region}}</p>
                <p><span>Sub Region: </span>{{country.subregion}}</p>
                <p><span>Capital: </span>{{country.capital}}</p>
                <p><span>Top Level Domain: </span>{{country.tld}}</p>
                <p><span>Currencies: </span>{{country.currencies}}</p>
                <p><span>Languages: </span>{{country.languages}}</p>
            </div>
            <div class="borders" v-if="country.borders.length">
                <p>Border Countries: </p>
                <div class="borders-container">
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
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        countryName: String
    },
    data() {
        return {
            country: null
        }
    },
    mounted() {
        this.$store.dispatch('fetchCountries')
    },
    created() {
        this.country = this.countries.find((c) => c.name === this.countryName)
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
img.flag {
    width: 100%;
    height: auto;
    margin-bottom: 44px;
}

h2 {
    font-weight: var(--font-weight-bold);
}

.details {
    margin-top: 16px;
    margin-bottom: 34px;
}

.details span {
    font-weight: var(--font-weight-semi);
}

.borders p {
    font-weight: var(--font-weight-semi);
}

.borders-container {
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
    img.flag {
        width: 330px;
        height: 229px;
    }    
}

@media screen and (min-width: 768px) {
    img.flag {
        width: 560px;
        height: 401px;
    }

    .details {
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

    .details {
        height: auto;
    }
}

@media screen and (min-width: 1220px) {
    .country-container {
        align-items: center;
        column-gap: 100px;
    }

    .borders {
        display: flex;
        gap: 15px;
    }

    .details {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 120px;
        column-gap: 60px;
        margin-bottom: 68px;
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

