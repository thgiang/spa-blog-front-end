<template>
  <div class="user-manager">
    <h1>{{this.title}}</h1>

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
        Trang {{currentPage}} trên tổng số {{this.$store.state.usermanager.users.last_page}} trang.<br/>
        <nuxt-link :to="{ path: '/user-manager', query: { page: prevPage}}"
                   v-if="prevPage !== 0 && prevPage !== currentPage">Trang trước
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="{ path: '/user-manager', query: { page: nextPage}}"
                   v-if="nextPage > 1 && nextPage !== currentPage">Trang tiếp
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
        keyword: "",
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
            if(response.data.status === "success") {
              window.location.reload();
            } else {
              alert("Lỗi: "+ response.data.message);
            }
          }).catch(error => {
              alert("Lỗi khi xóa: "+error);
          })
        }
      },
      searchNow(e) {
        this.title = "Tìm kiếm thành viên";
        this.$axios.get('/api/user-manager/search?keyword=' + this.keyword).then(response => {
          if(response.data.status === "success") {
            this.$store.commit('usermanager/setUsers', response.data.data);
          } else {
            // Ko tìm thấy kết quả
          }
        }).catch(error => {
          alert("Lỗi khi tìm kiếm "+error);
        })
        e.preventDefault();

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
