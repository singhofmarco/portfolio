<template>
  <div class="bg-gray-100 p-8 md:py-32 font-sans font-light md:text-lg text-gray-900 mx-auto">
    <div class="max-w-3xl w-full sm:flex mx-auto bg-gray-200 shadow-xl mb-16 items-stretch rounded-lg">
      <div
          class="bg-gray-300 px-6 py-4 md:py-6 md:px-8 flex items-center justify-center rounded-t-lg md:rounded-r-none md:rounded-l-lg">
        <picture>
          <source srcSet="/images/profile.webp" type="image/webp"/>
          <source srcSet="/images/profile.jpg" type="image/jpeg"/>
          <img class="rounded-full border-2 w-32 h-32 md:w-40 md:h-40" src="/images/profile.jpg"
               alt="Marco"/>
        </picture>
      </div>
      <div class="py-6 px-6 md:px-8 md:flex-1md:text-lg flex flex-col">
        <div>
          <h1 class="text-xl md:text-2xl font-semibold leading-8">Marco Singhof</h1>
          <div class="text-base text-blue-700">Full-stack developer</div>
          <div class="text-base text-gray-700">Munich, Germany</div>
        </div>
        <div class="mt-auto">
          <a class="transition-colors duration-200 bg-blue-700 hover:bg-blue-800 hover:text-white text-white shadow-lg p-2 px-4 rounded inline-block mt-2"
             href="mailto:coffee@singhof.dev">
            Contact me
          </a>
        </div>
      </div>
    </div>
    <div class="max-w-3xl w-full mx-auto bg-gray-200 shadow-xl  mb-16 rounded-lg">
      <div class="bg-gray-300 py-2 px-6 md:px-8 rounded-t-lg">
        <h2 class="font-semibold text-xl md:text-2xl">Who am I?</h2>
      </div>
      <div class="py-6 px-6 md:px-8 spaced">
        <p class="mb-6">I'm <a href="https://twitter.com/marcosinghof"
                               class="text-blue-700 hover:text-blue-900">@marcosinghof</a>,
          a full-stack developer who loves to create things for the web.</p>
        <p class="mb-6">In 2013, I created one of the most popular tweaks for the iOS jailbreak called <a
            class="text-blue-700 hover:text-blue-900"
            href="https://www.idownloadblog.com/2013/12/30/noslowanimations-ios-7/">NoSlowAnimations</a>.</p>
        <p>Right now, I'm building beautiful web experiences for clients using Laravel and Vue.js, and I study Computer
          Science at the Ludwig Maximilian University of Munich.</p>
      </div>
    </div>
    <footer class="text-center text-gray-800 text-base">&copy; 2020 Marco Singhof</footer>
  </div>
</template>

<script>
export default {

}
</script>