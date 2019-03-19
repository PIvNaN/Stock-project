<template>
    <div class="component-container">
        <Stock v-for="stock in stocks" :stock="stock"></Stock>
    </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    data() {
      return {
        stocks: [
          { id: 1, name: 'glasses', price: 190 },
          { id: 2, name: 'phone', price: 1100 },
          { id: 3, name: 'watch', price: 610 },
          { id: 4, name: 'tablet', price: 10 },
        ]
      }
    },
    components: {
      Stock
    },
  }
</script>
