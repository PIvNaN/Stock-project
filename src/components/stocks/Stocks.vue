<template>
    <div class="component-container">
        <Stock v-for="stock in stocks" :stock="stock"></Stock>
    </div>
</template>

<script>
  import Stock from './Stock.vue'
  import {mapState} from 'vuex'

  export default {
    components: {
      Stock
    },
    computed: {
      ...mapState ({
        stocks: state => state.stocks
      }),
    }
  }
</script>
