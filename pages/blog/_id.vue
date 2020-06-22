<template>
  <div class="blog-content">
    <h1 class="blog-title">{{this.$store.state.blog.blog.title}}</h1>
    <img :src="this.$store.state.blog.blog.thumbnail" :alt="this.$store.state.blog.blog.title"
         class="blog-future-image"/>
    <div class="blog-description">
      <strong>{{this.$store.state.blog.blog.description}}</strong>
    </div>
    <div class="blog-content">
      <p>{{this.$store.state.blog.blog.content}}</p>
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
