<template>
  <div>
    <header class="header bg-yellow-500 text-center">
      <h1 class="blog-name pt-lg-4 mb-0">
        <a href="#" class="text-black">Blog</a>
      </h1>

      <nav class="navbar navbar-expand-lg navbar-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div id="navigation" class="collapse navbar-collapse flex-column">
          <div class="profile-section pt-3 pt-lg-0">
            <img class="mb-3 rounded-full object-cover h-32 w-32 mx-auto" src="/colored_logo.png" alt="image">

            <ul class="social-list list-inline py-3 mx-auto">
              <li class="list-inline-item">
                <a href="https://twitter.com/babalolajnr" target="_blank"><i class="fab fa-twitter  text-black fa-fw" /></a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.linkedin.com/in/abdulqudduus-babalola-2418a9145/" target="_blank"><i class="fab fa-linkedin-in  text-black fa-fw" /></a>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/babalolajnr" target="_blank"><i class="fab fa-github-alt  text-black fa-fw" /></a>
              </li>
            </ul><!--//social-list-->
            <hr>
          </div><!--//profile-section-->

          <ul class="navbar-nav flex-column text-left">
            <li class="nav-item active">
              <nuxt-link class="nav-link" to="/blog">
                <i class="fas fa-home fa-fw mr-2" />Blog Home <span class="sr-only">(current)</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  // head () {
  //   return {
  //     script: [
  //       {
  //         src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
  //         integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj',
  //         crossorigin: 'anonymous'
  //       },
  //       {
  //         src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js',
  //         integrity: 'sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx',
  //         crossorigin: 'anonymous'

  //       }
  //     ],
  //     link: [
  //       {
  //         rel: 'stylesheet',
  //         href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css',
  //         integrity: 'sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2',
  //         crossorigin: 'anonymous'
  //       },
  //       {
  //         rel: 'stylesheet',
  //         href: '~assets/css/theme-1.css'
  //       }
  //     ]
  //   }
  // }
}
</script>
