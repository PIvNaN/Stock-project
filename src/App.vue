<template>
    <div class="container">
        <Header></Header>
        <div class="row">
          <div class="col-xs-12">
            <router-view></router-view>
          </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
        components: {
          Header
        },
        created() {
          this.$store.dispatch('setStocks')
        }
    }
</script>

<style>
  .btn.disabled,
  .btn[disabled],
  fieldset[disabled] .btn {
    cursor: default
  }
</style>
