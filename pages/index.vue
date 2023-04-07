<template>
  <div class="homepage_content">

    <Filters @sortPopulation="sortPopulation($event)" @sortByName="sortByName($event)"
      :isSortPopulation="isSortPopulation" :isSortByName="isSortByName" :input="input" @search="input = $event"
      @region="filterRegion($event)" />

    <section class="countries__holder">
      <Country :country="country" :key="country.name.common" v-for="country in filterCounties" />
      <EmptyMsg v-if="filterCounties.length == 0" />
    </section>

  </div>
</template>

<script>
import Country from '~/components/HomePage/Country';
import Filters from '~/components/HomePage/Filters';
import EmptyMsg from '~/components/EmptyMsg';
import axios from 'axios';

export default {
  components: {
    Country,
    Filters,
    EmptyMsg
  },
  data() {
    return {
      input: '',
      allData: [],
      isSortPopulation: true,
      isSortByName: true,
      selectedRegion: ''

    }
  },
  computed: {
    filterCounties() {
      return this.countries.filter(
        (data) =>
          (!this.input ||
            data.name.common.toLowerCase().includes(this.input) || data.name.common.toLowerCase().replace(/[aeiou]/gi, '').includes(this.input)) && data.region.toLowerCase().includes(this.selectedRegion)
      )
    },

  },
  methods: {
    sortPopulation(type) {
      this.isSortPopulation = type;
      this.countries.sort(function (a, b) {
        return (type ? b.population - a.population : a.population - b.population);
      });
    },
    sortByName(type) {
      this.isSortByName = type;
      return this.countries.sort((a, b) => {
        if (type ? a.name.common < b.name.common : a.name.common > b.name.common)
          return -1;
        if (type ? a.name.common > b.name.common : a.name.common > b.name.common)
          return 1;
        return 0;
      })
    },
    filterRegion(region) {
      this.selectedRegion = region;

    }
  },
  async asyncData(context) {
    return axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        return {
          countries: res.data
        }
      })
      .catch(e => {
        context.error(e);
      })

  },
  created() {
    if (this.$route.query.search != undefined) {
      this.input = this.$route.query.search.toLowerCase();
    }
    if (this.$route.query.sortPopulation != undefined) {
      this.$route.query.sortPopulation.toLowerCase() == 'true' ? this.isSortPopulation = true : this.isSortPopulation = false
    }
    this.sortPopulation(this.isSortPopulation)
    if (this.$route.query.sortName != undefined) {
      this.$route.query.sortName.toLowerCase() == 'true' ? this.isSortByName = true : this.isSortByName = false;
    }
    this.sortByName(this.isSortByName)
    if (this.$route.query.region != undefined) {
      this.selectedRegion = this.$route.query.region.toLowerCase();
    }
  }
}
</script>
<style lang="scss" scoped>
.countries__holder {
  display: grid;
  gap: 2rem;
  padding: 0 3rem;
  align-items: center;
}


@media (min-width: 1024px) {
  .countries__holder {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
    padding: 0 5rem;

  }


}
</style>
