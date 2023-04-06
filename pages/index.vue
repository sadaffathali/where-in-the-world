<template>
  <div class="homepage_content">
    <!-- <p @click="sortPopulation">
      test
    </p> -->
    <Filters :input="input" @search="input = $event" />
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
      isSortByName: true

    }
  },
  computed: {
    filterCounties() {
      return this.countries.filter(
        (data) =>
          !this.input ||
          data.name.common.toLowerCase().includes(this.input) || data.name.common.toLowerCase().replace(/[aeiou]/gi, '').includes(this.input)
      )
    },

  },
  methods: {
    sortPopulation() {
      this.countries.sort(function (a, b) {
        return b.population - a.population;
      });
    },
    sortByName() {
      return this.countries.sort((a, b) => {
        if (a.name.common < b.name.common)
          return -1;
        if (a.name.common > b.name.common)
          return 1;
        return 0;
      })
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
  }
}
</script>
<style lang="scss" scoped>
.countries__holder {
  display: grid;
  gap: 2rem;
  padding: 0 3rem;

}

.homepage_content {
  display: flex;
  flex-flow: column wrap;

}

@media (min-width: 1024px) {
  .countries__holder {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
    padding: 0 5rem;

  }


}
</style>
