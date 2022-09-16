<template>
<div class="filter-bar container--wide">
    <div class="search-filter">
        <font-awesome-icon 
            class="search-icon" 
            icon="fa-solid fa-magnifying-glass"
        >
        </font-awesome-icon>
        <input 
            class="search-text shadow rounded"
            type="text" 
            name="search" 
            placeholder="Search for a country..."
        >
    </div>
    <div class="region-filter">
        <select class="filter-dropdown shadow rounded" name="region" id="region" aria-placeholder="Filter by Region">
            <option value="none" selected disabled hidden>Filter by Region</option>
            <option v-for="country in this.countries" :key="country.region">{{country.region}}</option>
        </select>
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

<style scoped>
.filter-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 48px;
}

/* search field */
.search-filter {
    position: relative;
    margin-bottom: 40px;
}

.search-icon {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    color: var(--icon-color);
}

input.search-text {
    width: 343px;
    height: 48px;
    padding: 18px 45px;
    border: none;
    background: var(--color-background);
    color: var(--color-text);
}

input:focus {
    outline: none;
}

/* filter dropdown */
.region-filter > select {
    width: 200px;
    height: 48px;
    border: none;
    outline: none;
    background: var(--color-background);
    color: var(--color-text);
    padding: 0 24px;
    font-size: 14px;
    line-height: 20px;
}

.region-filter > option {
    color: var(--color-text-element);
}

@media screen and (min-width: 768px) {
    .filter-bar {
        flex-direction: row;
    }

    .search-filter {
        margin-bottom: 0;
    }

    input.search-text {
        width: 480px;
        height: 56px;
    }

    .region-filter > select {
        height: 56px;
    }
}
</style>

