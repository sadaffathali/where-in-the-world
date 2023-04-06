<template>
    <div class="country__page">

        <div class="flag_container">
            <img class="flag" :src="country.flags.png" :alt="country.name.common" loading="lazy">
        </div>
        <div class="">
            <h1 class="dark-blue">
                {{ country.name.common }}
            </h1>
            <div class="detail_holder">
                <div>
                    <CountryDetail title="native name">
                        {{ Object.values(country.name.nativeName)[0].common }}
                    </CountryDetail>
                    <CountryDetail title="Population">
                        {{ country.population | numberFormatter }}
                    </CountryDetail>
                    <CountryDetail title="Region">
                        {{ country.region }}
                    </CountryDetail>
                    <CountryDetail title="sub region">
                        {{ country.subregion }}
                    </CountryDetail>
                    <CountryDetail title="capital">
                        {{ country.capital[0] }}
                    </CountryDetail>
                </div>
                <div>
                    <CountryDetail title="top level domain">
                        {{ country.tld[0] }}
                    </CountryDetail>

                    <CountryDetail title="currencies">
                        {{ Object.values(country.currencies)[0].name }}
                    </CountryDetail>

                    <CountryDetail title="languages">
                        {{ languages }}
                    </CountryDetail>
                </div>
            </div>

            <div class="border_countries">
                <CountryDetail title="border countries">
                    <Button :key="i" v-for="(border, i) in country.borders" :link="border.toLowerCase()">
                        {{ border.toLowerCase() }}
                    </Button>
                </CountryDetail>
            </div>




        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    asyncData(context) {
        return axios.get('https://restcountries.com/v3.1/alpha/' + context.params.id)
            .then(res => {
                return {
                    country: res.data[0]
                }
            })
            .catch(e => {
                context.error(e);
            })
    },
    computed: {
        languages() {
            let langs = "";
            Object.values(this.country.languages).forEach(val => langs = val + ', ' + langs);
            return langs;

        }
    }
};
</script>


<style scoped lang="scss">
.country__page {
    display: grid;
    padding: 1.5rem 0.8rem;
    align-items: center;
}

.detail_holder {
    display: grid;
    gap: 2rem;
}

.border_countries {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-top: 1.5rem;
}

@media (min-width: 1024px) {
    .country__page {
        grid-template-columns: repeat(2, 1fr);
        gap: 4rem;
        padding: .5rem 5rem;
        margin: 4rem 0;
    }

    .detail_holder {
        grid-template-columns: 1fr 1fr;


        h1 {
            grid-column: span 2;
        }
    }

    .border_countries {
        margin-top: 3rem;
    }


}
</style>
