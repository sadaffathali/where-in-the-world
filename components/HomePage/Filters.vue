<template>
    <div class="filters__container">
        <div class="search_holder">
            <input type="text" class="bg-white box-shadow" placeholder="Search for a country..." @keyup="setQueryString"
                v-model.trim="search">
            <span class="material-icons">
                search
            </span>
        </div>

        <div class="sort_holder">
            <div class="sort box-shadow bg-white" @click="setSortName">
                <span class="material-icons-outlined">
                    {{ sortByName ? 'expand_less' : 'expand_more' }}
                </span>
                Country Name
            </div>
            <div class="sort box-shadow bg-white" @click="setSortPopulation">
                <span class="material-icons-outlined">
                    {{ sortPopulation ? 'expand_less' : 'expand_more' }}
                </span>
                Population
            </div>
        </div>

        <div class="filter_region" @focusout="handleFocusOut" tabindex="0">
            <div class="header box-shadow bg-white" @click="openRegion = !openRegion">
                Filter by Region
                <span class="material-icons-outlined icon">
                    {{ openRegion ? 'expand_more' : 'expand_less' }}
                </span>
            </div>
            <div class="content bg-white" v-if="openRegion">
                <ul>
                    <li :class="{ 'active': region.title.toLowerCase() == activeRegion }"
                        @click="filterRegion(region.title)" v-for="(region, i) in regions" :key="i">
                        {{ region.title }}
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        input: {
            type: String,
            required: true
        },
        isSortPopulation: {
            type: Boolean,
            required: true,
        },
        isSortByName: {
            type: Boolean,
            required: true,
        },
        selectedRegion: {
            type: String
        }
    },
    data() {
        return {
            search: this.input,
            sortPopulation: this.isSortByName,
            sortByName: this.isSortByName,
            openRegion: false,
            regions: [
                { title: 'Africa', },
                { title: 'Americas' },
                { title: 'Asia' },
                { title: 'Europe' },
                { title: 'Oceania' }
            ],
            activeRegion: this.selectedRegion
        }
    },
    methods: {
        setQueryString() {
            this.updateQuery();
            this.$emit('search', this.search.toLowerCase())
        },
        setSortName() {
            this.sortByName = !this.sortByName;
            this.updateQuery();
            this.$emit('sortByName', this.sortByName)
        },
        setSortPopulation() {
            this.sortPopulation = !this.sortPopulation;
            this.updateQuery();
            this.$emit('sortPopulation', this.sortPopulation)
        },
        updateQuery() {
            this.$router.push({ query: { sortPopulation: this.sortPopulation, sortName: this.sortByName, search: this.search, region: this.activeRegion } });
        },
        filterRegion(val) {
            this.activeRegion = val.toLowerCase();
            this.updateQuery();
            this.openRegion = false;
            this.$emit('region', this.activeRegion);

        },

        handleFocusOut() {
            this.openRegion = false;
        }
    }

}
</script>

<style lang="scss" scoped>
.filters__container {
    display: grid;
    align-items: center;
    margin: 1rem 0 2rem 0;
    padding: 1.5rem 0.8rem;
    gap: 2rem;

    input {
        border: 0;
        outline: none;
        width: 100%;
        line-height: 2.5;
        font-size: 14px;
        padding: .5rem 1rem;
        border-radius: 7px;
        color: hsl(0, 0%, 52%);
        padding-left: 70px;

        &:palceholder {
            color: hsl(0, 0%, 52%);
        }

    }

    .sort_holder {

        display: none;

        .sort {
            display: flex;
            align-items: center;
            font-size: 13px;
            cursor: pointer;
            padding: .81rem 1rem;
            border-radius: 7px;
        }

    }

    .filter_region {
        position: relative;
        grid-column: -1;
        font-size: 14px;
        font-weight: 300;
        width: 60%;

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: .81rem 1rem;
            border-radius: 7px;
            cursor: pointer;

            .icon {
                margin-left: 20px;
                font-size: 20px;
            }


        }

        .content {
            position: absolute;
            z-index: 9;
            top: 108%;
            padding: .8rem 1rem;

            border-radius: 7px;
            width: -webkit-fill-available;
            left: 0;

            ul {
                list-style-type: none;
                padding-left: 0;
                margin: 0;
                line-height: 1.5;

                li {
                    cursor: pointer;

                    &:hover,
                    &.active {
                        font-weight: 800;
                    }
                }

            }
        }
    }


    .material-icons {
        color: hsl(0, 0%, 52%);
        position: absolute;
        top: 15px;
        left: 25px;
    }


}

.search_holder {
    position: relative;
    display: flex;
}

@media (min-width: 1024px) {
    .filters__container {
        grid-template-columns: repeat(5, 1fr);
        padding: .5rem 5rem;
        margin: 3rem 0;

        .search_holder {
            grid-column: span 2;
        }

        .sort_holder {
            grid-column: span 2;
            justify-content: flex-start;
            gap: 20px;
            display: flex;
            align-items: center;
            flex-flow: row wrap;

        }

        .filter_region {
            width: 100%;
        }
    }
}

.dark {
    .search_holder {
        input {
            color: hsl(0, 0%, 100%);

            &::placeholder {
                color: hsl(0, 0%, 80%);
            }
        }

        .material-icons {
            color: hsl(0, 0%, 80%);
        }
    }


}
</style>