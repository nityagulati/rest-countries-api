<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>

<template>
  <Header></Header>
  <router-view></router-view>
</template>

<style>
.container, .container--wide {
  padding: 30px;
}

@media screen and (max-width:767px) {
  .container--wide {
    padding: 30px 15px;
  } 
}

@media screen and (min-width:360px) {
  .container {
    padding: 30px 55px;
  }
}

@media screen and (min-width:768px) {
  .container {
    padding: 30px 80px;
  }
}
</style>
