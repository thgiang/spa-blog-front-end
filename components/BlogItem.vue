<template>
  <div class="blog-item">
    <div class="row">
      <div class="col-4">
        <img :src="blog.thumbnail" width="100%"/>
      </div>
      <div class="col-8">
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
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
