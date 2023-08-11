<script setup>
definePageMeta({
  layout: 'default'
});
</script>
<template>
  <div>
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
