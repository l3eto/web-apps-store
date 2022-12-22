<template>
  <div class="projects-page">
    <div class="projects-page__landing">
      <div class="projects-page__content-text">
        <h1 class="projects-page__title">Our Projects</h1>
        <p class="projects-page__description">Welcome to our work space.</p>
      </div>
      <div class="projects-page__content-image">
        <img class="projects-page__image" src="~/assets/half-moon.png" />
      </div>
    </div>
    <div class="projects-page__items">
        <div
            class="projects-page__item"
            v-for="item in items"
            :key="item.name"
            :style="getStyleBg(item.bgColor)"
            >
            <project-card v-bind="item" />
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'ProyectsPage',
    data () {
        return {
            items: []
        }
    },
    async fetch () {
        const response = await fetch(`http://localhost:3000/api/projects`);
        const { projects } = await response.json();
        this.items = projects;
    },
    methods: {
        getStyleBg (color: String) {
            return {
                background: `linear-gradient(180deg, ${color} 25%, #0d0d0d 75%)`
            };
        }
    }
})
</script>

<style lang="scss">
.projects-page {

    &__landing {
        min-height: calc(100vh - 56px);
        display: flex;
        align-items: center;
    }
	
	&__content {
		&-text {
			max-width: 600px;
			margin-left: 100px;
            margin-bottom: 56px;
		}
		&-image {
			max-width: 600px;
			position: absolute;
			right: 0;
            top: 0;
			z-index: -1;
		}
	}

	&__image {
		max-width: 100%;
	}

	&__subtitle {
		font-size: 28px;
		line-height: 1.14286;
		margin-bottom: 20px;
		margin-top: 32px;
		letter-spacing: .01em;
		font-weight: 400;
	}
	&__title {
        font-size: 64px;
		line-height: 1.0625;
		margin-bottom: 20px;
		font-weight: 600;
		letter-spacing: -.01em;
	}
	&__description {
		font-size: 21px;
		line-height: 1.38105;
		margin-bottom: 4px;
		color: #ccc;
		letter-spacing: .01em;
		font-weight: 400;
	}

    &__items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 450px;
    }

    .project-card {
        width: 650px;
    }
}
</style>
