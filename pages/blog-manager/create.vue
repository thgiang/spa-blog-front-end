<template>
  <div class="user-edit">
    <h1>Thêm thành viên</h1>
    <form @submit="saveUser">
      <div class="form-group">
        <label for="name">Họ và tên</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="Trần Hoàng Giang" v-model="user.name">
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" name="username" placeholder="giangth" v-model="user.username">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" name="email" id="email" placeholder="Enter email" v-model="user.email">
      </div>
      <div class="form-group">
        <label for="role">Quyền hạn</label>
        <select class="form-control" id="role" name="role" v-model="user.role">
          <option value="reader">Chỉ đọc</option>
          <option value="writer">Viết bài</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div class="form-group">
        <label for="password">Mật khẩu mới</label>
        <input type="text" class="form-control" id="password" aria-describedby="passWordHelp" placeholder="Password" v-model="user.password">
        <small id="passWordHelp" class="form-text text-muted">Để trống nếu không muốn đổi mật khẩu</small>
      </div>
      <button type="submit" class="btn btn-primary col-md-12">LƯU</button>
    </form>
    <notifications group="notification" position="bottom right"/>
  </div>
</template>
<script>
  export default {
    head() {
      return {
        title: "Tạo tài khoản mới"
      }
    },
    data() {
      return {
        user: {
          username: '',
          name: '',
          email: '',
          password:'',
          role: 'writer'
        }
      }
    },
    methods: {
      saveUser(e) {
        let self = this;
        this.$axios.post('/api/user-manager/create', self.user).then(response => {
          if(response.data.status === "success") {
            this.$notify({
              group: 'notification',
              title: 'Thành công',
              type: 'success',
              position: 'bottom right',
              text: 'Lưu thông tin thành viên thành công'
            });
          } else {
            this.$notify({
              group: 'notification',
              title: 'Lỗi',
              type: 'error',
              position: 'bottom right',
              text: 'Lỗi khi lưu: '+response.data.message
            });
          }
        }).catch(error => {
          alert("Lỗi lưu user: "+error);
        })

        e.preventDefault();
      }
    }
  }
</script>
<style>
  .user-edit {
    background: #FFF;
    padding: 10px;
  }
  .vue-notification {
    font-size: 16px;
  }
</style>
