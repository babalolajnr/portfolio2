<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px; transform: translateZ(0px)"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">
            Let's keep in touch!
          </h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-700">
            Find me on any of these platforms, I respond in 1-2 business days.
          </h5>
          <div class="mt-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=babalolajnr@gmail.com"
              target="_blank"
            >
              <button
                class="text-red-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i class="flex fab fa-google" />
              </button>
            </a>
            <a href="https://twitter.com/babalolajnr" target="_blank">
              <button
                class="text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i class="flex fab fa-twitter" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/abdulqudduus-babalola-2418a9145/"
              target="_blank"
            >
              <button
                class="text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i class="flex fab fa-linkedin" />
              </button>
            </a>
            <a href="https://github.com/babalolajnr" target="_blank">
              <button
                class="text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i class="flex fab fa-github" />
              </button>
            </a>
          </div>
          <div class="mt-6">
            <span
              class="text-sm"
            >Hero Photo by
              <a
                class="text-blue-500"
                href="https://unsplash.com/@altumcode?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              >AltumCode</a>
              on
              <a
                class="text-blue-500"
                href="https://unsplash.com/s/photos/developer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
              >Unsplash</a></span>
          </div>
          <div>
            <span
              class="text-sm"
            >Logo design by
              <span class="text-blue-500">AbdulsGraphix. </span>
              Email @
              <a
                class="text-blue-500"
                href="belloabdullahi216@gmail.com"
              >belloabdullahi216@gmail.com</a></span>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4 mt-6 lg:mt-0">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
              >Links</span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="#"
                  >About Me</a>
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://github.com/babalolajnr"
                  >Github</a>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    to="/blog"
                  >
                    Blog
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400">
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Babalola Abdulqudduus <span class="font-semibold">{{ date }}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>
