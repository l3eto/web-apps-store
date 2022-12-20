<template>
  <div class="nuxt-header">
    <nav class="nuxt-header__nav">
        <nuxt-link class="nuxt-header__link" to="/">Welcome</nuxt-link>
        <nuxt-link class="nuxt-header__link" to="/services">Services</nuxt-link>
        <nuxt-link class="nuxt-header__link nuxt-header__link-work" to="/projects">Projects</nuxt-link>
        <nuxt-link class="nuxt-header__link" to="/contact">Contact</nuxt-link>
    </nav>
  </div>
</template>

<style lang="scss">
.nuxt-header {
    height: 56px;
    display: flex;

    &__nav {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        margin: 0 100px;
    }
    &__link {
        font-size: 16px;
        font-weight: 500;

        &-work {
            flex-grow: 1;
        }

        &.nuxt-link-exact-active {
            color: #45adff;
            color: #ff8975;
        }
    }
}
</style>
