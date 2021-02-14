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
  //       }

  //     ]
  //   }
  // }

}
</script>
