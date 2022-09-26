<template>
<div class="country-page">
    <router-link to="/rest-countries-api/" class="btn btn--back shadow rounded">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
        Back
    </router-link>
    <div class="country-container">
        <img src="" alt="" class="country-img flag">
        <div class="country-info">
            <h2>Country Name</h2>
            <div class="details">
                <p>Native Name:</p>
                <p>Population:</p>
                <p>Region:</p>
                <p>Sub Region:</p>
                <p>Capital:</p>
                <p>Top Level Domain:</p>
                <p>Currencies:</p>
                <p>Languages:</p>
            </div>
            <div class="borders">
                <p>Border Countries: </p>
                <div class="border-buttons">
                    <router-link to="/rest-countries-api/" class="btn btn--border shadow rounded">Country 1</router-link>
                    <router-link to="/rest-countries-api/" class="btn btn--border shadow rounded">Country 2</router-link>
                    <router-link to="/rest-countries-api/" class="btn btn--border shadow rounded">Country 3</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        countries: Object
    }
    
}
</script>

<style scoped>
.btn {
    display: block;
    background: var(--color-background);
    color: var(--color-text);
    text-decoration: none;
}

.country-page {
    margin: 40px 28px;
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

img.flag {
    width: 100%;
    height: auto;
    border: 2px solid red;
    margin-bottom: 44px;
}

.details {
    margin-top: 16px;
    margin-bottom: 34px;
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
    img.flag {
        width: 330px;
        height: 229px;
    }    
}

@media screen and (min-width: 768px) {
    .country-page {
        margin: 50px 80px;
    }

    .back-btn {
        padding: 10px 40px 10px 0;
        width: 136px;
        height: 40px;
    }

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
