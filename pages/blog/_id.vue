<template>
  <div class="blog-content">
    <div v-if="this.$store.state.auth.user.role === 'admin' || (this.$store.state.auth.user.role === 'writer' && this.$store.state.blog.blog.user_id === this.$store.state.auth.user.id)" class="float-right">
      <nuxt-link :to="{name: 'blog-manager-edit-id', params: {id: this.$store.state.blog.blog.id}}" class="bg-danger p-1 text-white">Sửa bài viết</nuxt-link>
    </div>
    <h1 class="blog-title">{{this.$store.state.blog.blog.title}}</h1>
    <img :src="this.$store.state.blog.blog.thumbnail" :alt="this.$store.state.blog.blog.title"
         class="blog-future-image"/>
    <div class="blog-description">
      <strong v-html="this.$store.state.blog.blog.description"></strong>
    </div>
    <div class="blog-content">
      <span v-html="this.$store.state.blog.blog.content"></span>
    </div>
  </div>
</template>
<script>
  export default {
    middleware: ['get_blog'],
    head() {
      return {
        title: this.$store.state.blog.blog.title + ' - Blog GHTK'
      }
    },
  }
</script>
<style scoped>
  .blog-content {
    background: #FFF;
    padding: 10px;
    text-align: justify
  }

  .blog-future-image {
    display: block;
    margin: 10px auto;
    max-width: 80%;
  }

  .blog-description {
    padding: 10px;
    text-align: justify;
  }


  .blog-title {
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
  }
</style>
