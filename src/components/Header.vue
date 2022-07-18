<template>
  <!-- Header -->
  <header class="w-full h-[10vh] md:h-[15vh] flex items-center">
    <div class="flex items-center justify-between w-[90%] mx-auto">
      <Logo />
      <nav>
        <ul class="flex items-center gap-6 text-[16px]">
          <li class="inline text-secondary hover:text-primary hover:font-black">
            <a href="/login">Login</a>
          </li>
          <li class="inline text-primary font-black hover:text-secondary">
            <a href="/register">Sign-up</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Logo from "./Logo.vue";
export default {
  components: { Logo },
};
</script>

<style>
</style>