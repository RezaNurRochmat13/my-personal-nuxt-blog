<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

onMounted(() => {
  initFlowbite();
});
</script>
