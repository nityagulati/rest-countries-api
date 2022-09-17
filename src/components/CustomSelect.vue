<template>
    <div class="custom-select shadow" tabindex="0" @blur="open = false">
        <div class="selected" :class="{open: open}" @click.stop="open = !open">
            {{selected}}
        </div>
        <div class="items shadow" :class="{hide: !open}">
            <div v-for="(option, index) of options" 
                :key="index" @click.stop="selectOption(option)"
            >
                {{option}}
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    emits: ['filterRegion'],
    props: {
        options: Array,
        default: String
    },
    data() {
        return {
            selected: this.default,
            open: false
        }
    },
    methods: {
        selectOption(option) {
            this.selected = option
            this.open = false
            return this.$emit('filterRegion', option)
        }
    }
}
</script>

<style scoped>
.custom-select {
    position: relative;
    width: 200px;
    height: 48px;
    line-height: 48px;
    text-align: left;
    outline: none;
}

.custom-select .selected {
    background-color: var(--color-background);
    border-radius: 5px 5px 0 0;
    padding-left: 24px;
    cursor: pointer;
    user-select: none;
}

.custom-select .selected.open {
    border: none;
}

.custom-select .selected:after {
    content: '';
    position: absolute;
    border: 5px solid transparent;
    border-color: var(--color-text) transparent transparent transparent;
    right: 15px;
    top: 55%;
    transform: translateY(-55%);
}

.custom-select .selected.open::after {
    border: 5px solid transparent;
    border-color: transparent transparent var(--color-text) transparent;
}

.custom-select .items {
    background-color: var(--color-background);
    border-radius: 0 0 5px 5px;
    color: var(--color-text);
    overflow: hidden;
    margin-top: 5px;
    z-index: 1;
}

.custom-select .items div {
    color: var(--color-text);
    padding-left: 24px;
    cursor: pointer;
    user-select: none;
}

.custom-select .items div:hover {
    background-color: var(--color-background-mute);
}

.hide {
    display: none;
}

@media screen and (min-width: 768px) {
    .custom-select {
        height: 56px;
        line-height: 56px;
    }
}
</style>
