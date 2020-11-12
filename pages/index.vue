<template>
  <div class="josefinSans">
    <Navbar />
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="background-image: url('/hero.jpg');"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          />
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="lg:pr-12 px-4">
                <h1 class="text-white font-semibold text-5xl">
                  Babalola Abdulqudduus
                </h1>
                <p class="mt-4 text-lg lg:text-xl text-gray-300">
                  Hi, I am Abdulqudduus I am a Developer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px; transform: translateZ(0px)"
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
      </div>
      <section class="pb-20 bg-gray-300 -mt-24">
        <IntroCards />
      </section>
      <section class="relative py-20">
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
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
        <!-- about -->
        <About />
        <!-- /about -->
      </section>
      <section class="pb-20 relative block bg-gray-900">
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
              class="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-yellow-500 mt-8 lg:mt-0">
                Build an amazing project
              </h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                I create efficient and secure digital solutions with great
                Search Engine Optimization that will improve your business and
                overall online presence
              </p>
            </div>
          </div>
          <div class="flex flex-wrap mt-12 justify-center">
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-yellow-500 p-3 w-12 h-12 shadow-lg rounded-full bg-black inline-flex items-center justify-center"
              >
                <i class="fas fa-medal text-xl" />
              </div>
              <h6 class="text-xl mt-5 font-semibold text-white">
                Excellent Service
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Fast and quality product delivery
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-yellow-500 p-3 w-12 h-12 shadow-lg rounded-full bg-black inline-flex items-center justify-center"
              >
                <i class="fas fa-poll text-xl" />
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Grow your business
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                Increase your customer base with an online presence and great
                SEO ranking.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center mb-8">
              <div
                class="text-yellow-500 p-3 w-12 h-12 shadow-lg rounded-full bg-black inline-flex items-center justify-center"
              >
                <i class="fas fa-lightbulb text-xl" />
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Launch time
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                Go from concept to launch in a matter of weeks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="relative block py-24 lg:pt-0 bg-gray-900">
        <Contact />
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
export default {
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
