<template>
  <div class="user-manager">
    <h1>{{ this.title }}</h1>
    <nuxt-link :to="{name: 'user-manager-create'}" class="btn btn-primary float-right">Thêm thành viên</nuxt-link>
    <form class="form-inline" method="get" @submit="searchNow">
      <div class="form-group mb-2">
        <label for="keyword" class="sr-only">Từ khóa</label>
        <input type="text" name="keyword" id="keyword" class="form-control" placeholder="Tìm theo username" v-model="keyword"/>
      </div>
      <button type="submit" class="btn btn-primary ml-2 mb-2">Tìm</button>
      <a href="" click="() => {window.location.reload()}" class="ml-2 mb-2">Hủy</a>
    </form>

    <table class="table">
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Họ tên</th>
        <th>Email</th>
        <th>Thao tác</th>
      </tr>
      <tr v-for="user in this.$store.state.usermanager.users.data">
        <td>{{user.id}}</td>
        <td>{{user.username}}</td>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td><nuxt-link :to="{name: 'user-manager-edit-id', params: {id: user.id}}">Sửa</nuxt-link> | <a href="javascript:;" @click="deleteUser(user)">Xóa</a></td>
      </tr>
    </table>
    <div class="row" v-if="this.keyword === ''">
      <div class="col-md-12 text-center">
        <paginate
          v-model="currentPage"
          :page-count="parseInt(this.$store.state.usermanager.users.last_page)"
          :click-handler="goToPage"
          :prev-text="'Trang trước'"
          :next-text="'Trang tiếp'"
          :container-class="'my-pagination'">
        </paginate>
        <!--
        Trang {{currentPage}} trên tổng số {{this.$store.state.usermanager.users.last_page}} trang.<br/>
        <nuxt-link :to="{ path: '/user-manager', query: { page: prevPage}}"
                   v-if="prevPage !== 0 && prevPage !== currentPage">Trang trước
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="{ path: '/user-manager', query: { page: nextPage}}"
                   v-if="nextPage > 1 && nextPage !== currentPage">Trang tiếp
        </nuxt-link>
        -->
      </div>
    </div>
  </div>
</template>
<script>
import Paginate from 'vuejs-paginate'

export default {
  middleware: ['get_users'],
  components: {
    Paginate
  },
  data() {
    return {
      title: "Quản lý thành viên",
      currentPage: 1,
      keyword: ""
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  methods: {
    goToPage(p) {
      this.$router.push({ name: 'user-manager', query: { page: p} })
    },
    deleteUser(user) {
      let confirm = window.confirm("Bạn có chắc muốn xóa tài khoản " + user.username + " không?");
      if (confirm) {
        this.$axios.get('/api/user-manager/delete/' + user.id).then(response => {
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
    searchNow(e) {
      this.title = "Tìm kiếm thành viên";
      this.$axios.get('/api/user-manager/search?keyword=' + this.keyword).then(response => {
        if (response.data.status === "success") {
          this.$store.commit('usermanager/setUsers', response.data.data);
        } else {
          // Ko tìm thấy kết quả
        }
      }).catch(error => {
        alert("Lỗi khi tìm kiếm " + error);
      })
      e.preventDefault();

    }
  },
  updated() {
    this.currentPage = parseInt(this.$route.query['page']);
  }
}
</script>
<style>
.user-manager {
  background: #FFF;
  padding: 10px;
}
</style>
