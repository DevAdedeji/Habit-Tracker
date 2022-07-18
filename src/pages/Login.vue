<template>
  <main class="w-full min-h-screen flex">
    <div class="w-full md:w-[60%]">
      <header class="h-[10vh] md:h-[15vh] w-[90%] mx-auto flex items-center">
        <Logo />
      </header>
      <!-- Form Container -->
      <div class="w-[90%] md:w-[60%] pt-20 mx-auto">
        <form @submit.prevent="login" class="flex flex-col gap-8">
          <!-- Title -->
          <div class="text-center text-[20px] md:text-[30px] lg:text-[40px]">
            <p>
              Login to your
              <span class="text-primary font-bold">piste</span> account
            </p>
          </div>
          <!-- Email -->
          <div class="flex flex-col gap-2">
            <label for="email" class="font-bold text-[16px]">Email*</label>
            <input
              type="email"
              v-model="email"
              required
              class="border border-bgColor rounded-[5px] p-2 outline-none"
            />
          </div>
          <!-- Password -->
          <div class="flex flex-col gap-2">
            <label for="password" class="font-bold text-[16px]"
              >Password*</label
            >
            <input
              type="password"
              v-model="password"
              required
              class="border border-bgColor rounded-[5px] p-2 outline-none"
            />
          </div>
          <button class="bg-primary text-white w-full py-3 rounded-[5px]">
            Login
          </button>
        </form>
      </div>
    </div>
    <div class="bg-bgColor hidden md:flex w-[40%] items-center justify-center">
      <img src="../assets/login.svg" class="w-[90%] mx-auto" alt="login-img" />
    </div>
  </main>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Logo from "../components/Logo.vue";
export default {
  setup() {
    const email = ref<string>("");
    const password = ref<string>("");
    const login = () => {
      console.log(email.value, password.value);
    };
    return { email, password, login };
  },
  components: { Logo },
};
</script>

<style>
</style>