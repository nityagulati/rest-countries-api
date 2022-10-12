<template>
<div class="container">
    <router-link to="/rest-countries-api/" class="btn btn--back shadow rounded">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
        Back
    </router-link>
    <CountryInfo :countryName="countryName"></CountryInfo>
</div>
</template>

<script>
import CountryInfo from '@/components/CountryInfo.vue'

export default {
    components: {
        CountryInfo
    },
    props: {
        countryName: String
    },
    data() {
        return {
            countryName: this.countryName
        }
    }
}
</script>

<style scoped>
.container {
    margin: 40px 28px;
    padding: 0;
}

.btn--back {
    padding: 6px 24px 6px 0;
    width: 104px;
    height: 32px;
    margin-bottom: 50px;
}

.fa-arrow-left {
    padding-left: 24px;
    padding-right: 5px;
}

@media screen and (min-width: 768px) {
    .container {
        margin: 50px 80px;
    }

    .btn--back {
        padding: 10px 40px 10px 0;
        width: 136px;
        height: 40px;
    }
}
</style>
