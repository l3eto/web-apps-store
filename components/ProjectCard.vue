<template>
  <div class="project-card">
    <div class="project-card__info">
        <img class="project-card__logo" :src="logo" />
        <div class="project-card__content-text">
            <div class="project-card__title">{{ title }}</div>
            <div class="project-card__description">{{ description }}</div>
        </div>
        <div class="project-card__links">
            <nuxt-link class="project-card__nuxt-link" :to="'/projects/' + name">
                <span>Ver mas info </span>
                <span class="material-icons">chevron_right</span>
            </nuxt-link>
        </div>
    </div>
    <div class="project-card__content-image">
        <img class="project-card__image" :src="image" />
    </div>
  </div>
</template>

<style lang="scss">
.project-card {
    display: flex;
    grid-gap: 24px;
    gap: 24px;
    justify-content: center;
    align-items: flex-start;

    &__content {
        &-logo {
            width: 80px;
        }
        &-text {
            width: calc(100% - 80px - 12px);
        }
        &-image {
            width: 40%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    &__info {
        width: 60%;
        display: flex;
        flex-flow: wrap;
        align-items: flex-start;
        justify-content: flex-start;;
        gap: 12px;
    }

    &__links {
        display: flex;
        flex-direction: column;
    }

    &__nuxt-link {
        display: flex;
        align-items: center;
        color: #ff8975;

        &:hover {
            color: #fe6a51;
        }

        .material-icons {
            margin-left: 4px;
        }
    }

    &__logo {
        width: 80px;
        height: auto;
        border-radius: 8px;
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        max-width: 250px;
        max-height: 250px;
    }

    &__title {
		font-size: 21px;
		line-height: 1.38105;
		letter-spacing: .01em;
		font-weight: 400;
		margin-bottom: 8px;
    }

    &__description {
		font-size: 13px;
        line-height: 1.2;
		font-weight: 400;
		color: #ccc;
    }

}
</style>

<script lang="ts">
    export default {
        inheritAttrs: false,
        props: {
            name: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            logo: {
                type: String,
                required: true
            }
        }
    }
</script>

