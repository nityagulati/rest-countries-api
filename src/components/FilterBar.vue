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
            v-model.trim = "searchText"
        >
    </div>
    <CustomSelect class="region-filter"
        :options="options"
        :default="default"
        @filterRegion="filterRegion"
    >
    </CustomSelect>
</div>
</template>

<script>
import CustomSelect from './CustomSelect.vue'

export default {
    emits: ['getRegion', 'getSearch'],
    components: {
        CustomSelect
    },
    data() {
        return {
            options: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
            default: 'Fitler by Region',
            selectedRegion: '',
            searchText: ''
        }
    },
    methods: {
        filterRegion(option) {
            return this.selectedRegion = option
        }
    },
    watch: {
        selectedRegion() {
            this.$emit('getRegion', this.selectedRegion)
        },
        searchText() {
            this.$emit('getSearch', this.searchText)
        }
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
}
</style>

