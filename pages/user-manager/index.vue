<template>
  <div class="user-manager">
    <h1>Quản lý thành viên</h1>
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
        <td>Sửa | <a href="javascript:;" @click="deleteUser(user)">Xóa</a></td>
      </tr>
    </table>
    <div class="row">
      <div class="col-md-12 text-center">
        Trang {{currentPage}} trên tổng số {{this.$store.state.usermanager.users.last_page}} trang.<br/>
        <nuxt-link :to="{ path: '/user-manager', query: { page: prevPage}}"
                   v-if="prevPage !== 0 && prevPage !== currentPage">Trang trước
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="{ path: '/user-manager', query: { page: nextPage}}"
                   v-if="nextPage !== 0 && nextPage !== currentPage">Trang tiếp
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    middleware: ['get_users'],
    data() {
      return {
        title: "Quản lý thành viên",
        currentPage: 1,
        nextPage: 0,
        prevPage: 0,
      }
    },
    head() {
      return {
        title: this.title
      }
    },
    methods: {
      deleteUser(user) {
        let confirm = window.confirm("Bạn có chắc muốn xóa tài khoản " + user.username + " không?");
        if (confirm) {
          this.$axios.get('/api/user-manager/delete/' + user.id).then(response => {
            window.location.reload();
          }).catch(error => {
              alert("Lỗi khi xóa "+error);
          })
        }
      }
    },
    updated() {
      if (this.$route.query.hasOwnProperty('page') && this.$route.query['page'] > 0) {
        this.currentPage = this.$route.query['page'];
      }
      if (this.$store.state.usermanager.users.data.length > 0) {
        //this.title = this.$store.state.usermanager.users.data[0].name;
        if (this.$store.state.usermanager.users.next_page_url !== null) {
          this.nextPage = parseInt(this.currentPage) + 1;
        }
        if (this.$store.state.usermanager.users.prev_page_url !== null) {
          this.prevPage = parseInt(this.currentPage) - 1;
        }

      }
    }
  }
</script>
<style>
  .user-manager {
    background: #FFF;
    padding: 10px;
  }
</style>
