<template>
  <div class="blog-item">
    <div class="row">
      <div class="col-4 blog-image">
        <nuxt-link :to="{ name: 'blog-id', params: {id: blog.id}}">
          <img :src="blog.thumbnail" width="100%" @error="imageUrlAlt()" />
        </nuxt-link>
      </div>
      <div class="col-8 blog-text">
        <div v-if="this.$store.state.auth.user.role === 'admin' || (this.$store.state.auth.user.role === 'writer' && blog.user_id === this.$store.state.auth.user.id)" class="float-right">
          <nuxt-link :to="{name: 'blog-manager-edit-id', params: {id: blog.id}}" class="bg-danger p-1 text-white">Sửa bài viết</nuxt-link>
        </div>
        <h3>
          <nuxt-link :to="{ name: 'blog-id', params: {id: blog.id}}">
            {{blog.title}}
          </nuxt-link>
        </h3>
        <p class="d-none d-sm-block blog-description" v-html="blog.description"></p>
        <div class="extra-info">
          <span class="category">{{blog.cat_name}} • </span> <span class="category">{{blog.updated_at.substr(0, 10)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'blog-item',
    props: ['blog'],
    methods: {
      imageUrlAlt(event) {
        event.target.src = "~assets/images/alt-image.jpg"
      }
    }
  }
</script>
<style>
  .blog-item {
    width: calc(100% - 20px);
    margin: 10px;
    float: left;
    padding: 10px;
    border-radius: 1px;
    background: #FFF;
  }

  .blog-item h3 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
  }
  .blog-image {
    max-height: 260px;
    overflow: hidden;
  }
  .extra-info {
    color: #909090;
    font-size: 14px;
    text-transform: uppercase;
  }
  .blog-text p {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    .blog-item {
      width: 100%;
      margin: 10px 0;
    }
  }
</style>
