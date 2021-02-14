<template>
  <div class="">
    <!-- <BlogSidebar /> -->
    <div class="flex justify-center mt-56 lg:mt-64">
      <h1 class="lg:text-6xl text-3xl font-semibold text-center text-black">
        Coming Soon
      </h1>
    </div>
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
  }

}
</script>
