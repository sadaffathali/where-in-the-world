<template>
  <div class="homepage_content">
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
    }
  },
  computed: {
    filterCounties() {
      return this.countries.filter(
        (data) =>
          !this.input ||
          data.name.official.toLowerCase().includes(this.input)
      )
    }
  },
  async asyncData({ $axios }) {
    const countries = await $axios.$get('https://restcountries.com/v3.1/all')
    return { countries }
  },
  created() {
    if (this.$route.query.search != undefined) {
      this.input = this.$route.query.search;
    }
  }
}
</script>
<style lang="scss" scoped>
.countries__holder {
  display: grid;
  gap: 2rem;

}

.homepage_content {
  display: flex;
  flex-flow: column wrap;
  padding: 0 3rem;
}

@media (min-width: 1024px) {
  .countries__holder {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;

  }

  .homepage_content {
    padding: 0 5rem;
  }
}
</style>
