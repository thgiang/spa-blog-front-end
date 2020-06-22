<template>
  <div class="blog-item">
    <div class="row">
      <div class="col-4">
        <nuxt-link :to="{ name: 'blog-id', params: {id: blog.id}}">
          <img :src="blog.thumbnail" width="100%"/>
        </nuxt-link>
      </div>
      <div class="col-8">
        <div v-if="this.$store.state.auth.user.role === 'admin' || (this.$store.state.auth.user.role === 'writer' && blog.user_id === this.$store.state.auth.user.id)" class="float-right">
          <nuxt-link :to="{name: 'blog-manager-edit-id', params: {id: blog.id}}" class="bg-danger p-1 text-white">Sửa bài viết</nuxt-link>
        </div>
        <h3>
          <nuxt-link :to="{ name: 'blog-id', params: {id: blog.id}}">
            {{blog.title}}
          </nuxt-link>
        </h3>
        <p class="d-none d-sm-block" v-html="blog.description"></p>
        <div class="extra-info">
          <span class="category">{{blog.category.name}}</span> • <span class="category">{{blog.updated_at.substr(0, 10)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'blog-item',
    props: ['blog'],
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

  .extra-info {
    color: #909090;
    font-size: 14px;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    .blog-item {
      width: 100%;
      margin: 10px 0;
    }
  }
</style>
