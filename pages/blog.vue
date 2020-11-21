<template>
  <div>
    <BlogSidebar />

    <div class="main-wrapper">
      <section class="blog-list px-3 py-5 p-md-5">
        <div class="container">
          <div v-for="post of posts" :key="post.slug" class="item mb-5">
            <div class="media">
              <img class="mr-3 img-fluid post-thumb d-none d-md-flex" :src="post.thumbnail" alt="image">
              <div class="media-body">
                <h3 class="title mb-1">
                  <NuxtLink class="more-link" :to="post.slug">
                    {{ post.title }}
                  </NuxtLink>
                </h3>
                <div class="meta mb-1">
                  <span class="date">{{ $moment(post.date).format('llll') }}</span><span class="time">5 min read</span><span class="category">{{ post.category }}</span>
                </div>
                <div class="intro">
                  {{ post.Description | slice }} ...
                </div>
                <NuxtLink class="more-link" :to="post.slug">
                  Read more &rarr;
                </NuxtLink>
              </div><!--//media-body-->
            </div><!--//media-->
          </div><!--//item-->

          <nav class="blog-nav nav nav-justified my-5">
            <a class="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i class="arrow-prev fas fa-long-arrow-alt-left" /></a>
            <a class="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i class="arrow-next fas fa-long-arrow-alt-right" /></a>
          </nav>
        </div>
      </section>

      <footer class="footer text-center py-2 theme-bg-dark mt-56">
        <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com */-->
        <small class="copyright">Designed with <i class="fas fa-heart" style="color: #fb866a;" /> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
      </footer>
    </div><!--//main-wrapper-->
  </div>
</template>

<script>
export default {
  filters: {
    slice (value) {
      if (!value) {
        return ''
      } else {
        return value.slice(0, 300)
      }
    }
  },

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
        }

      ]
    }
  }

}
</script>
<style scoped src="@/assets/css/theme-5.css">

</style>
