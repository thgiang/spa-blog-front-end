<template>
  <div class="comment-manager">
    <h1>{{ this.title }}</h1>
    <table class="table">
      <tr>
        <th>ID</th>
        <th>Nội dung comment</th>
        <th>User</th>
        <th>Thao tác</th>
      </tr>
      <template v-for="comment in this.$store.state.commentmanager.comments.data">
      <tr v-if="!deleted.hasOwnProperty(comment.id)">
        <td>{{comment.id}}</td>
        <td>{{comment.text}}</td>
        <td style="min-width: 100px">{{comment.user.name}}</td>
        <td style="min-width: 100px"><a href="javascript:;" @click="deletecomment(comment)">Xóa</a></td>
      </tr>
      </template>
    </table>
      <div class="col-md-12 text-center">
        <paginate
          v-model="currentPage"
          :page-count="parseInt(this.$store.state.commentmanager.comments.last_page)"
          :click-handler="goToPage"
          :prev-text="'Trang trước'"
          :next-text="'Trang tiếp'"
          :container-class="'my-pagination'">
        </paginate>
      </div>
    </div>
</template>
<script>
import Paginate from 'vuejs-paginate'

export default {
  middleware: ['get_comments'],
  components: {
    Paginate
  },
  data() {
    return {
      title: "Quản lý comment",
      currentPage: 1,
      deleted: []
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  methods: {
    goToPage(p) {
      this.$router.push({ name: 'comment-manager', query: { page: p} })
    },
    deletecomment(comment) {
      let confirm = window.confirm("Bạn có chắc muốn xóa comment không?");
      if (confirm) {
        this.deleted.push(comment.id);
        this.$axios.get('/api/comment-manager/delete/' + comment.id).then(response => {
          if (response.data.status === "success") {
            window.location.reload();
          } else {
            alert("Lỗi: " + response.data.message);
          }
        }).catch(error => {
          alert("Lỗi khi xóa: " + error);
        })
      }
    },
  },
  updated() {
    this.currentPage = parseInt(this.$route.query['page']);
  }
}
</script>
<style>
.comment-manager {
  background: #FFF;
  padding: 10px;
}
</style>
