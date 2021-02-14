<template>
  <div>
    <blog-sidebar />
    <div class="main-wrapper">
      <article class="blog-post px-3 py-5 p-md-5">
        <div class="container">
          <header class="blog-post-header">
            <h2 class="title mb-2">
              {{ post.title }}
            </h2>
            <div class="meta mb-3">
              <span class="date">{{ $moment(post.date).format('llll') }}</span><span class="time">5 min read</span>
            </div>
          </header>

          <div class="blog-post-body">
            <figure class="blog-banner">
              <img class="img-fluid" :src="post.thumbnail" alt="image">
            </figure>
            <nuxt-content :document="post" />

            <footer class="footer text-center py-2 theme-bg-dark">
              <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */-->
              <small class="copyright">Designed with <i class="fas fa-heart" style="color: #fb866a;" /> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
            </footer>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import BlogSidebar from '~/components/BlogSidebar.vue'
export default {
  components: { BlogSidebar },
  async asyncData ({ $content, params, error }) {
    let post
    try {
      post = await $content('blog', params.slug).fetch()
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post
    }
  },
  head () {
    return {

    }
  }
}
</script>
