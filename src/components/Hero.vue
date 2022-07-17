<template>
  <section class="w-full h-[90vh] md:[85vh] flex items-center justify-center">
    <div
      class="
        w-[90%]
        mx-auto
        flex flex-col
        gap-16
        md:flex-row
        items-center
        justify-between
      "
    >
      <!-- Hero-text -->
      <div
        class="
          md:w-[50%]
          lg:w-[40%]
          mx-auto
          flex flex-col
          items-center
          justify-center
          text-center
          gap-6
          order-2
          md:order-1
        "
      >
        <h1
          class="
            font-black
            text-black text-[30px]
            md:text-[40px]
            lg:text-[50px]
          "
        >
          Unlock your full potential with
          <span class="text-primary font-black">piste</span>
        </h1>
        <p class="text-secondary">
          Focus on what truly matters with
          <span class="text-primary font-black">piste.</span> Build the best
          version of yourself by mastering your habits.
        </p>
        <a
          href="/login"
          class="
            text-white
            bg-primary
            px-12
            py-3
            rounded-[20px]
            hover:underline
          "
          >Get Started</a
        >
      </div>
      <!-- Hero Image -->
      <div class="flex items-center justify-center order-1 md:order-2 w-1/2">
        <img
          src="../assets/monitor.svg"
          class="md:hidden"
          alt="activity-image"
        />
        <img
          src="../assets/hero.png"
          class="hidden md:block"
          alt="hero-image"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {};
</script>

<style>
</style>