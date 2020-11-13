<template>
  <div class="container mx-auto px-4">
    <form
      name="contact"
      data-netlify
      data-netlify-honeypot="bot-field"
      method="post"
      @submit.prevent="handleFormSubmit"
    >
      <input type="hidden" name="form-name" value="contact">
      <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
          >
            <div class="flex-auto p-5 lg:p-10">
              <h4 class="text-2xl font-semibold">
                Got a project?
              </h4>
              <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                Complete this form and I will get back to you in 24 hours.
              </p>
              <div class="relative w-full mb-3 mt-8">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  for="full-name"
                >Full Name</label><input
                  v-model="formData.fullname"
                  type="text"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Full Name"
                  name="fullname"
                  style="transition: all 0.15s ease 0s"
                  required
                >
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  for="email"
                >Email</label><input
                  v-model="formData.email"
                  type="email"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Email"
                  style="transition: all 0.15s ease 0s"
                  name="email"
                  required
                >
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  for="message"
                >Message</label><textarea
                  v-model="formData.message"
                  rows="4"
                  cols="80"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Type a message..."
                  name="message"
                  required
                />
              </div>
              <div class="text-center mt-6">
                <button
                  class="bg-black text-yellow-500 hover:text-black hover:bg-yellow-500 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="submit"
                  style="transition: all 0.15s ease 0s"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      formData: {
        fullname: null,
        email: null,
        message: null
      }
    }
  },
  methods: {
    encode (data) {
      const formData = new FormData()

      for (const key of Object.keys(data)) {
        formData.append(key, data[key])
      }

      return formData
    },
    handleFormSubmit (e) {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }

      axios.post(
        location.href,
        this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData
        }),
        axiosConfig
      )
        .then((data) => {
          const dataStatus = data
          console.log(dataStatus)
        })
        .catch(error => console.log(error))
    }
  }

}
</script>

<style>
</style>
