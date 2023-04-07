<template>
    <div class="country__page">
        <div class="back">
            <Button link="/" size="big">
                <span class="material-icons-outlined icon">
                    west
                </span>
                Back
            </Button>
        </div>
        <Flag :src="country.flags.png" :alt="country.name.common" />

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

            <div class="border_countries" v-if="country.borders">
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
    padding: 2rem;
    align-items: center;
    row-gap: 3rem;
    column-gap: 6rem;

    h1 {
        margin-top: 0;
    }
}

.detail_holder {
    display: grid;
    gap: 2rem;
}

.border_countries {
    display: flex;
    flex-flow: column wrap;

    align-items: center;
    margin-top: 2rem;

    .more_detail {
        gap: 15px;
    }
}

.back {
    display: flex;
    align-items: flex-start;

    .icon {
        font-weight: 300;
        margin-right: 10px;
    }
}

@media (min-width: 1024px) {
    .country__page {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 4rem;
        column-gap: 6rem;
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
        flex-flow: row wrap;
    }

    .back {
        grid-column: span 2;

    }


}
</style>
