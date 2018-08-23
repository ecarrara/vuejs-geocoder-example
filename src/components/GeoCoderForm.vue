<template>
  <div class="hello">
    <p>
      <input type="text" v-model="addr">
      <button @click="doGeocoding">Geocode!</button>
    </p>

    <p v-if="result">
      Lat: {{ result.geometry.location.lat() }} / Lon: {{ result.geometry.location.lng() }}
    </p>
  </div>
</template>

<script>
import { getLatLngFromAddress } from '@/services/geocoder'

export default {
  data () {
    return {
      addr: '',
      result: null
    }
  },
  methods: {
    doGeocoding () {
      getLatLngFromAddress(this.addr).then(result => {
        this.result = result
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
