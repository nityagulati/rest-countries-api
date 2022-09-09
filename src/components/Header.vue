<template>
<header>
    <h1>Where in the world?</h1>
    <button 
        class="theme-toggle"
        title="toggles light and dark"
        aria-label="auto"
        aria-live="polite"
        @click.stop="themeToggle"
    >
        <font-awesome-icon v-if="!isDarkTheme" icon="fa-regular fa-moon" />
        <font-awesome-icon v-else icon="fa-regular fa-lightbulb" />
        {{toggleText}}
    </button>
</header>
</template>


<script>
export default {
    data() {
        return {
            isDarkTheme: false,
            toggleText: 'Dark Mode'
        }
    },
    methods: {
        themeToggle() {
            this.isDarkTheme = !this.isDarkTheme
            if(this.isDarkTheme) {
                this.toggleText = 'Light Mode'
            } else {
                this.toggleText = 'Dark Mode'
            }
        }
    }
}
</script>


<style scoped>
header {
  background: var(--color-background);
  box-shadow: var(--box-shadow);
  padding: 24px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-lg);
}

.theme-toggle {
    cursor: pointer;
    font-weight: var(--font-weight-semi);
    border: none;
    background: none;
    padding: 0;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    outline-offset: 5px;
}
</style>