<template>
  <div class="links">
    <ul>
      <li v-for="brand in brands" :key="brand.id"> 
        <nuxt-link :to="'/brands/selectstore'">{{brand.brand_name}}</nuxt-link>
      </li>
    </ul>
     <ul>
      <li v-for="location in locations" :key="location.id">{{location_brand}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      brands:'',
      locations: ''
    }
  },
  methods: {
  async fetchBrands() {
    const brands = await this.$axios.$get('http://localhost:8000/brands')
    this.brands = brands
  }
},
mounted() {
  this.fetchBrands();
}

};
</script>

<style>
</style>