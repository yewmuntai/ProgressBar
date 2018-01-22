<template>
    <button v-on:click="getData">Reset</button>
</template>
<script>
export default {
  name: 'GetData',
  props: ['cfg'],
  methods: {
    getData () {
      console.log(this.cfg)
      this.$http.get('http://localhost:3000').then((resp) => {
        this.$set(this.cfg, 'data', resp.body)
      })
    }
  }
}
</script>
