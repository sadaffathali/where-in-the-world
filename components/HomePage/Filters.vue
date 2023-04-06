<template>
    <div class="filters__container">
        <div class="search_holder">
            <input type="text" placeholder="Search for a country..." @keyup="setQueryString" v-model.trim="search">
            <span class="material-icons">
                search
            </span>
        </div>
        {{ input }}
    </div>
</template>
<script>
export default {
    props: {
        input: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            search: this.input
        }
    },
    methods: {
        setQueryString() {
            this.$router.push({ query: { search: this.search } });
            this.$emit('search', this.search.toLowerCase())
        }
    }

}
</script>

<style lang="scss" scoped>
.filters__container {
    width: 100%;
    display: grid;
    align-items: center;
    margin: 3rem 0;

    input {
        box-shadow: 1px 1px 10px 1px hsl(0, 0%, 89.12%);
        border: 0;
        outline: none;
    }
}

@media (min-width: 1024px) {
    .filters__container {
        grid-template-columns: repeat(5, 1fr);

        .search_holder {
            grid-column: span 2;
            position: relative;
            display: flex;

            input {
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

            .material-icons {
                color: hsl(0, 0%, 52%);
                position: absolute;
                top: 15px;
                left: 25px;
            }
        }
    }
}

.dark {
    input {
        box-shadow: 1px 1px 10px 1px hsl(210deg 19.98% 13.94% / 55%);
    }
}
</style>