<template>
    <div class="more_detail">
        <span class="title">{{ title }}:</span>
        <span class="detail">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String, required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.more_detail {
    &:not(:last-child) {
        margin-bottom: 8px;
    }

    gap: 7px;

    display: flex;
    flex-flow: row wrap;
    align-items: center;

    font-size: 14px;
    font-weight: 600;

    .detail {
        font-weight: 300;

        display: flex;
        flex-flow: row wrap;
        gap: 5px
    }

    .title {
        text-transform: capitalize;
    }
}

.dark {
    .more_detail {
        .detail {
            color: hsl(0, 0%, 80%);
        }
    }
}
</style>