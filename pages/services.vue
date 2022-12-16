<template>
  <div class="services-page">
    <div class="services-page__content-text">
      <h1 class="services-page__title">What can we offer you?</h1>
      <p class="services-page__description">Take a view of our diferents services.</p>
      <p class="services-page__subtitle">Webs</p>
      <p class="services-page__description"> - Websites SPA/PWA SSR.</p>
      <p class="services-page__description"> - Web Services</p>
      <p class="services-page__description"> - Notifications</p>
      <p class="services-page__subtitle">Apps</p>
      <p class="services-page__description"> - Native Apps android/ios.</p>
      <p class="services-page__description"> - Webview Apps android/ios.</p>
      <p class="services-page__description"> - Notifications</p>
      <p class="services-page__subtitle">Others</p>
      <p class="services-page__description"> - Mailing.</p>
      <p class="services-page__description"> - CMS content.</p>
      <p class="services-page__description"> - Database Managment.</p>
      <p class="services-page__description"> - Api's.</p>
    </div>
    <div class="services-page__content-image">
      <img class="services-page__image" src="~/assets/half-moon.png" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'ServicesPage'
})
</script>

<style lang="scss">
.services-page {
    min-height: calc(100vh - 56px);
	
	&__content {
		&-text {
			max-width: 600px;
			margin-left: 100px;
      margin-top: 100px;
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
}
</style>
