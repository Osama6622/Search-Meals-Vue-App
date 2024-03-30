<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded text-white border-2 border-orange-500 hover:border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
    ><slot>Defualt</slot
  ></a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>