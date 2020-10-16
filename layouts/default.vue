<template>
  <div>
    <Header/>
    <div class="bg-gray-100 p-8 md:py-32 font-sans font-light md:text-lg text-gray-900 mx-auto">
      <Nuxt/>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";

export default {
  name: "default",
  components: {Header}
}
</script>

<style scoped>

</style>