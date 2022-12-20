<template>
  <div class="welcome-page">
	<div class="welcome-page__landing">
		<div class="welcome-page__content-text">
		<p class="welcome-page__subtitle">To the moon</p>
		<h1 class="welcome-page__title">Web Apps Development.</h1>
		<p class="welcome-page__description">We take care of working with clean code principles to give you an efficient service.</p>
		<p class="welcome-page__description">We make custom designs to suit the user, but also using ux standards.</p>
		<p class="welcome-page__description">Take a look at our services</p>
		</div>
		<div class="welcome-page__content-image">
			<img class="welcome-page__image" src="~/assets/half-moon.png" />
		</div>
	</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'WelcomePage'
})
</script>

<style lang="scss">
.welcome-page {

	&__landing {
		min-height: calc(100vh - 56px);
		display: flex;
		align-items: center;
	}
	
	&__content {
		&-text {
			max-width: 600px;
			margin-left: 100px;
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
		margin-bottom: 12px;
		color: #ccc;
		letter-spacing: .01em;
		font-weight: 400;
	}
}
</style>
