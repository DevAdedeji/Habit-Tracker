<template>
  <main class="min-h-screen bg-[#E8E6F5] w-full">
    <Header />
    <Hero />
  </main>
</template>

<script lang="ts">
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
export default {
  components: { Header, Hero },
};
</script>

<style>
</style>