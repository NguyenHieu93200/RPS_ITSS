<template>
  <div
    class="
      hand
      p-6
      md:p-10
      w-28
      md:w-36
      h-28
      md:h-36
      cursor-pointer
      rounded-full
      bg-white
    "
  >
    <slot name="handImage"></slot>
    <slot name="handAfter"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
