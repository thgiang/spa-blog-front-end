<template>

  <div>
    <write-blog :title="this.title" :prop_blog="this.$store.state.blog.blog"/>
  </div>

</template>
<script>
import WriteBlog from "~/components/WriteBlog";
export default {
  middleware: ['get_blog'],
  components: {WriteBlog},
  data() {
    return {
      title: 'Sửa bài viết: ' + this.$store.state.blog.blog.title
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  updated() {
    this.title = this.$store.state.blog.blog.title;
  }
}
</script>
