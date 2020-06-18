<template>
  <div class="blog-list">
    <template v-for="(blog, index) in this.$store.state.blogs.data">
      <BlogItem v-bind:blog="blog" />
    </template>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import BlogItem from "../components/BlogItem";

  export default {
    components: {
      BlogItem,
      Logo
    },
    head() {
      return {
        title: 'Trang chủ - Blog GHTK'
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .blog-list {
    background: #FFF;
    font-size: 12px;
  }

  .blog-list h3 {
    font-size: 15px;
  }

  .blog-list p {
    text-align: justify;
  }

  .container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
