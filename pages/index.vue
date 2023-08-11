<script setup>
definePageMeta({
  layout: 'default'
});
</script>
<template>
  <div>
    <div class="container mb-6">
      <h2 class="text-center text-4xl text-red-600">Grid</h2>
      <div class="grid grid-cols-12 gap-8">
        <nav class="col-span-3 bg-purple-500">導覽列</nav>
        <ul class="col-span-9 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
          <li class="bg-red-400">1</li>
          <li class="bg-red-400">2</li>
          <li class="bg-red-400">3</li>
          <li class="bg-red-400">4</li>
          <li class="bg-red-400">5</li>
          <li class="bg-red-400">6</li>
        </ul>
      </div>
    </div>
    <!-- flex width -->
    <div class="container mb-6">
      <h2 class="text-center text-4xl text-red-600">Flex</h2>
      <ul class="-mx-3 flex flex-wrap">
        <li class="w-1/2 px-3 md:w-1/3">
          <img src="@/assets/images/index__banner01.png" alt="" />
        </li>
        <li class="w-1/2 px-3 md:w-1/3">
          <img src="@/assets/images/index__banner01.png" alt="" />
        </li>
        <li class="w-1/2 px-3 md:w-1/3">
          <img src="@/assets/images/index__banner01.png" alt="" />
        </li>
        <li class="w-1/2 px-3 md:w-1/3">
          <img src="@/assets/images/index__banner01.png" alt="" />
        </li>
      </ul>
    </div>
    <div
      class="h-[391px] bg-[url('@/assets/images/index__banner--old.png')] bg-cover bg-center bg-no-repeat"
    ></div>
  </div>
</template>

<style lang="scss">
.happy {
  font-size: 60px;
  @apply text-primary-300;
  @include pad {
    font-size: 30px;
  }
}
</style>
