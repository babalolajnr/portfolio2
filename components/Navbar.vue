<template>
  <div>
    <nav
      class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
    >
      <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
        >
          <img
            src="/logo.png"
            alt="logo"
            class="h-8"
          ><button
            class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            @click="toggleNavbar()"
          >
            <i class="text-white fas fa-bars" />
          </button>
        </div>
        <div
          class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
          :class="{ hidden: !showMenu, block: showMenu }"
        >
          <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li class="flex items-center">
              <a
                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://twitter.com/babalolajnr"
                target="_blank"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg"
              /><span class="lg:hidden inline-block ml-2">Twitter</span></a>
            </li>
            <li class="flex items-center">
              <a
                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://www.linkedin.com/in/abdulqudduus-babalola-2418a9145/"
                target="_blank"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-linkedin text-lg leading-lg"
              /><span class="lg:hidden inline-block ml-2">LinkedIn</span></a>
            </li>
            <li class="flex items-center">
              <a
                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://github.com/babalolajnr"
                target="_blank"
              ><i
                class="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg"
              /><span class="lg:hidden inline-block ml-2">Github</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
