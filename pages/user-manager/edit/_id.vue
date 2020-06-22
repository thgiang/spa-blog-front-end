<template>
  <div class="user-edit">
    <h1>Sửa thông tin thành viên: {{this.$store.state.usermanager.user.username}}</h1>
    <form @submit="saveUser">
      <div class="form-group">
        <label for="name">Họ và tên</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="Trần Hoàng Giang" v-model="name">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" name="email" id="email" placeholder="giangth@ghtk.vn" v-model="email">
      </div>
      <div class="form-group">
        <label for="role">Quyền hạn</label>
        <select class="form-control" id="role" name="role" v-model="role">
          <option value="reader">Chỉ đọc</option>
          <option value="writer">Viết bài</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div class="form-group">
        <label for="password">Mật khẩu mới</label>
        <input type="text" class="form-control" id="password" aria-describedby="passWordHelp" placeholder="Password" v-model="password">
        <small id="passWordHelp" class="form-text text-muted">Để trống nếu không muốn đổi mật khẩu</small>
      </div>
      <button type="submit" class="btn btn-primary col-md-12">LƯU</button>
    </form>
    <notifications group="notification" position="bottom right"/>
  </div>
</template>
<script>
    export default {
    middleware: ['get_user'],
    head() {
      return {
        title: "Sửa tài khoản: "+ this.$store.state.usermanager.user.username
      }
    },
    computed: {
      name: {
        get() {
          return this.$store.state.usermanager.user.name
        },
        set(value) {
          this.$store.commit('usermanager/setUserName', value)
        }
      },
      email: {
        get() {
          return this.$store.state.usermanager.user.email
        },
        set(value) {
          this.$store.commit('usermanager/setUserEmail', value)
        }
      },
      role: {
        get() {
          return this.$store.state.usermanager.user.role
        },
        set(value) {
          this.$store.commit('usermanager/setUserRole', value)
        }
      },
      password: {
        get() {
          return this.$store.state.usermanager.user.password
        },
        set(value) {
          this.$store.commit('usermanager/setUserPassword', value)
        }
      },
    },
    methods: {
      saveUser(e) {
        let self = this;
        this.$axios.post('/api/user-manager/save', self.$store.state.usermanager.user).then(response => {
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
