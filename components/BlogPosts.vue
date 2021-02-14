<template>
  <div>
    <div class="main-wrapper">
      <section class="blog-list px-3 py-5 p-md-5">
        <div class="container">
          <div v-for="post of posts" :key="post.slug" class="item mb-5">
            <div class="media">
              <img
                class="mr-3 img-fluid post-thumb d-none d-md-flex"
                :src="post.thumbnail"
                alt="image"
              >
              <div class="media-body">
                <h3 class="title mb-1">
                  <NuxtLink class="more-link" :to="post.slug">
                    {{ post.title }}
                  </NuxtLink>
                </h3>
                <div class="meta mb-1">
                  <span class="date">{{
                    $moment(post.date).format("llll")
                  }}</span><span class="time">5 min read</span><span class="category">{{ post.category }}</span>
                </div>
                <div class="intro">
                  {{ post.Description | slice }} ...
                </div>
                <NuxtLink class="more-link" :to="post.slug">
                  Read more &rarr;
                </NuxtLink>
              </div>
              <!--//media-body-->
            </div>
            <!--//media-->
          </div>
          <!--//item-->

          <nav class="blog-nav nav nav-justified my-5">
            <a
              class="nav-link-prev nav-item nav-link d-none rounded-left"
              href="#"
            >Previous<i
              class="arrow-prev fas fa-long-arrow-alt-left"
            /></a>
            <a
              class="nav-link-next nav-item nav-link rounded"
              href="blog-list.html"
            >Next<i
              class="arrow-next fas fa-long-arrow-alt-right"
            /></a>
          </nav>
        </div>
      </section>

      <footer class="footer text-center py-2 theme-bg-dark mt-56">
        <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com */-->
        <small
          class="copyright"
        >Designed with <i class="fas fa-heart" style="color: #fb866a" /> by
          <a
            href="http://themes.3rdwavemedia.com"
            target="_blank"
          >Xiaoying Riley</a>
          for developers</small>
      </footer>
    </div>
    //main-wrapper
  </div>
</template>
