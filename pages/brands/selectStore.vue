<template>
  <div>
    <p>this is the location page</p>
    <ul>
      <li v-for="location in locations" :key="location.id">{{location.location_brand}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations:''
    }
  },
  methods: {
    async fetchBrandLocations() {
      const locations = await this.$axios.$get(
        "http://localhost:8000/brands/1"
      );
      this.locations = locations;
    }
  },
  mounted() {
    this.fetchBrandLocations();
  }
};
</script>

<style>
</style>