<template>
  <div id="app">
    <getData :cfg='cfg'/>
    <Bar v-for="(bar, index) in bars" :key="index" :limit="cfg.data.limit" :val="bar"/>
    <div classs="button-container">
      <select v-model="active">
        <option v-for="(bar, idx) in bars" :value="idx" :key="idx">Progress Bar #{{idx+1}}</option>
      </select>
      <button v-for="(btn, idx) in cfg.data.button" :key="idx" v-on:click="update(btn)">{{btn > 0 ? '+' : ''}}{{btn}}</button>
    </div>
  </div>
</template>

<script>
import GetData from './components/GetData'
import Bar from './components/Bar'

export default {
  name: 'App',
  components: {
    GetData,
    Bar
  },
  data () {
    return {
      cfg: {
        data: {
          button: [],
          bars: 0,
          limit: 0
        }
      },
      active: 0,
      bars: []
    }
  },
  watch: {
    'cfg.data.bars': function (newVal, oldVal) {
      this.bars = []
      this.barStyle = []
      for (let i = 0; i < newVal; i++) {
        this.$set(this.bars, i, 100)
      }
    }
  },
  methods: {
    update: function (val) {
      console.log(val)
      let newBarVal = this.bars[this.active] + val;
      if (newBarVal < 0) {
        newBarVal = 0;
      }
      this.$set(this.bars, this.active, newBarVal)
      console.log(this.bars)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.bar {
  border: 1px solid #000;
  padding: 0;
  margin: 0 10px 10px;
  height: 40px;
  width: calc(100% - 20px);
  position:  relative;


  .colored {
    height: 100%;
    margin: 0;
    background-color: rgb(53, 153, 184);
    transition: width 2s;
    transition-timing-function: ease-out;
    
    &.full {
      background-color: red;
    }

    .text {
      top: 10px;
      font-weight: bold;
    }
  }
}

.button-container {
  display: flex;

  button {
    height: 25px;
    width: 60px;
  }
}
</style>
