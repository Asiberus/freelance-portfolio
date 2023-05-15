<template>
  <header>
    <h1>Raphael BEEKMANN</h1>
    <nav>
      <NuxtLink to="/">Accueil</NuxtLink>
      <NuxtLink to="/prestations">Prestations</NuxtLink>
      <NuxtLink to="/whoami">Qui suis-je ?</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
  </header>

  <main>
    <slot />
  </main>
</template>

<style scoped lang="scss">
a {
  margin-right: 1rem;
}
</style>
