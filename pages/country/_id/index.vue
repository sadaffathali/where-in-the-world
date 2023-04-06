<template>
    <div class="single-post-page">
        {{ loadedPost }}
    </div>
</template>

<script>
import axios from 'axios'

export default {
    asyncData(context) {
        return axios.get('ttps://restcountries.com/v3.1/alpha/' + context.params.id)
            .then(res => {
                return {
                    loadedPost: res.data
                }
            })
            .catch(e => context.error(e))
    }
};
</script>


<style scoped></style>
