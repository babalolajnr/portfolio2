<template>
  <div>
    <!-- <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post.slug">
        {{ post.title }}
      </NuxtLink>
    </li> -->

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
            <img class="mb-3 rounded-full object-cover h-48 w-48 mx-auto" src="~assets/img/blogMe.jpg" alt="image">

            <div class="bio mb-3 text-black">
              Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.<br><a href="about.html">Find out more about me</a>
            </div><!--//bio-->
            <ul class="social-list list-inline py-3 mx-auto">
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-twitter  text-black fa-fw" /></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-linkedin-in  text-black fa-fw" /></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-github-alt  text-black fa-fw" /></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fab fa-stack-overflow  text-black fa-fw" /></a>
              </li>
            </ul><!--//social-list-->
            <hr>
          </div><!--//profile-section-->

          <ul class="navbar-nav flex-column text-left">
            <li class="nav-item active">
              <a class="nav-link" href="index.html"><i class="fas fa-home fa-fw mr-2" />Blog Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="blog-post.html"><i class="fas fa-bookmark fa-fw mr-2" />Blog Post</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html"><i class="fas fa-user fa-fw mr-2" />About Me</a>
            </li>
          </ul>

          <div class="my-2 my-md-3">
            <a class="btn btn-primary" href="https://themes.3rdwavemedia.com/" target="_blank">Get in Touch</a>
          </div>
        </div>
      </nav>
    </header>

    <div class="main-wrapper">
      <section class="cta-section theme-bg-light py-5">
        <div class="container text-center">
          <h2 class="heading">
            DevBlog - A Blog Template Made For Developers
          </h2>
          <div class="intro">
            Welcome to my blog. Subscribe and get my latest blog post in your inbox.
          </div>
          <form class="signup-form form-inline justify-content-center pt-3">
            <div class="form-group">
              <label class="sr-only" for="semail">Your email</label>
              <input id="semail" type="email" name="semail1" class="form-control mr-md-1 semail" placeholder="Enter email">
            </div>
            <button type="submit" class="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div><!--//container-->
      </section>
      <section class="blog-list px-3 py-5 p-md-5">
        <div class="container">
          <div v-for="post of posts" :key="post.slug" class="item mb-5">
            <div class="media">
              <img class="mr-3 img-fluid post-thumb d-none d-md-flex" src="assets/images/blog/blog-post-thumb-1.jpg" alt="image">
              <div class="media-body">
                <h3 class="title mb-1">
                  <a href="blog-post.html">{{ post.title }}</a>
                </h3>
                <div class="meta mb-1">
                  <span class="date">{{ $moment(post.date).format('llll') }}</span><span class="time">5 min read</span>
                </div>
                <div class="intro">
                  {{ post.description }}
                </div>
                <a class="more-link" href="blog-post.html">Read more &rarr;</a>
              </div><!--//media-body-->
            </div><!--//media-->
          </div><!--//item-->

          <nav class="blog-nav nav nav-justified my-5">
            <a class="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i class="arrow-prev fas fa-long-arrow-alt-left" /></a>
            <a class="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i class="arrow-next fas fa-long-arrow-alt-right" /></a>
          </nav>
        </div>
      </section>

      <footer class="footer text-center py-2 theme-bg-dark">
        <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com */-->
        <small class="copyright">Designed with <i class="fas fa-heart" style="color: #fb866a;" /> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
      </footer>
    </div><!--//main-wrapper-->
    <blogCSS />
  </div>
</template>

<script>
export default {

  async asyncData ({ $content }) {
    const posts = await $content('blog').fetch()

    return {
      posts
    }
  },
  head () {
    return {
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
          integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj',
          crossorigin: 'anonymous'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx',
          crossorigin: 'anonymous'

        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css',
          integrity: 'sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: '~assets/css/theme-1.css'
        }
      ]
    }
  }

}
</script>
<style scoped src="@/assets/css/theme-5.css">

</style>
