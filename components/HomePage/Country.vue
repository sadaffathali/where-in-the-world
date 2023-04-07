<template>
    <NuxtLink :to="`country/${country.cca2}`" class="country__item bg-white box-shadow">
        <Flag :src="country.flags.png" :alt="country.name.common" />
        <div class="country__details">
            <h2 class="dark-blue">
                {{ country.name.common }}
            </h2>

            <CountryDetail title="Population">
                {{ country.population | numberFormatter }}
            </CountryDetail>
            <CountryDetail title="Region">
                {{ country.region }}
            </CountryDetail>
            <CountryDetail title="Capital">
                {{ country.capital != undefined && country.capital != null ? Object.values(country.capital)[0] : '' }}
            </CountryDetail>

        </div>

    </NuxtLink>
</template>
<script>
export default {
    props: {
        country: {
            type: Object,
            required: true
        }
    },

}
</script>
<style lang="scss" scoped>
.country__item {
    border-radius: 7px;
    overflow: hidden;


    .country__details {
        display: flex;
        flex-flow: column wrap;
        align-items: flex-start;
        padding: 0 1rem 2.5rem 1rem;
        margin-top: .8rem;

        h2 {
            font-size: 16px;
            margin-bottom: 1rem;
        }

    }
}
</style>