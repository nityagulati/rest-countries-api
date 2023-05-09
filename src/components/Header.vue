<template>
<header class="container--wide shadow">
    <h1>Where in the world?</h1>
    <button 
        class="theme-toggle"
        title="toggles light and dark mode"
        aria-label="auto"
        aria-live="polite"
        @click.stop="themeToggle"
    >
        <font-awesome-icon :icon="!darkMode ? 'fa-regular fa-moon' : 'fa-regular fa-lightbulb'"></font-awesome-icon>
        {{toggleText}}
    </button>
</header>
</template>


<script>
export default {
    data() {
        return {
            darkMode: false,
            toggleText: 'Dark Mode'
        }
    },
    methods: {
        themeToggle() {
            let htmlElement = document.documentElement
            this.darkMode = !this.darkMode
            if(this.darkMode) {
                this.toggleText = 'Light Mode'
                htmlElement.setAttribute('theme', 'dark')
            } else {
                this.toggleText = 'Dark Mode'
                htmlElement.setAttribute('theme', 'light')
            }
        }
    }
}
</script>


<style scoped>
header {
  background: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

h1 {
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-lg);
    margin-bottom: 15px;
}

.theme-toggle {
    cursor: pointer;
    color: var(--color-text);
    font-weight: var(--font-weight-semi);
    border: none;
    background: none;
    padding: 0;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    outline-offset: 5px;
}

@media screen and (min-width: 360px) {
    header {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        margin-bottom: 0;
    }
}
</style>