<template>
  <div class="proyects-page">
    <div class="proyects-page__landing">
      <div class="proyects-page__content-text">
        <h1 class="proyects-page__title">Our Proyects</h1>
        <p class="proyects-page__description">Welcome to our work space.</p>
      </div>
      <div class="proyects-page__content-image">
        <img class="proyects-page__image" src="~/assets/half-moon.png" />
      </div>
    </div>
    <div class="proyects-page__list">
      <div class="proyects-page__item">
        <h2>Web Iglesia Capitulo 29</h2>
        <p>decsripcion</p>
      </div>
      <div class="proyects-page__item">
        <h2>App Iglesia Capitulo 29</h2>
        <p>decsripcion</p>
      </div>
      <div class="proyects-page__item">
        <h2>Web Iglesia Oviedo</h2>
        <p>decsripcion</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'ProyectsPage'
})
</script>

<style lang="scss">
.proyects-page {

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

  &__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__item {
    padding: 40px 56px;
  }
}
</style>
