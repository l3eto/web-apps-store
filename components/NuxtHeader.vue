<template>
  <div class="nuxt-header">
    <nav class="nuxt-header__nav">
        <nuxt-link class="nuxt-header__link" to="/">Home</nuxt-link>
        <nuxt-link class="nuxt-header__link" to="/about">About</nuxt-link>
        <nuxt-link class="nuxt-header__link nuxt-header__link-work" to="/portfolio">Work</nuxt-link>
        <nuxt-link class="nuxt-header__link" to="/contact">Contact</nuxt-link>
    </nav>
  </div>
</template>

<style lang="css">
.nuxt-header {
    position: fixed;
    width: 100%;
}
.nuxt-header__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin: 0 100px;
}
.nuxt-header__link {
    padding: 16px;
    font-size: 16px;
}
.nuxt-header__link-work {
    flex-grow: 1;
}
.nuxt-header__link.nuxt-link-active {
    font-weight: bold;
}
</style>
