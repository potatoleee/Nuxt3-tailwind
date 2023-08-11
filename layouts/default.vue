<template>
  <div class="layout__wrap">
    <header>
      <ul class="flex justify-center gap-5">
        <li>
          <NuxtLink to="/">index</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">about</NuxtLink>
        </li>
      </ul>
    </header>
    <main>
      <slot />
    </main>
    <footer class="layout__footer">layout footer</footer>
  </div>
</template>
