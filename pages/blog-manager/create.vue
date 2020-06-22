<template>
  <write-blog :title="this.title"/>
</template>
<script>
import WriteBlog from "../../components/WriteBlog";
export default {
  components: {WriteBlog},
  data() {
    return {
      title: 'Viết bài mới'
    }
  },
  head() {
    return {
      title: this.title
    }
  },
}
</script>
