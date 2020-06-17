<template>
  <div class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4 offset-sm-4 text-center">
          <a href="/" title="Homepage">
            <img src="~assets/images/logo.png" alt="Logo" title="Logo" class="logo"/>
          </a>
        </div>
        <div class="col-sm-4 text-right">
          <div class="user-info">
            <img src="~assets/images/avatar.jpg" class="user-avatar">
            Hi, {{this.$store.state.auth.user.name}}.
            <nuxt-link to="/logout">Đăng xuất</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header'
  }
</script>
<style scoped>
  .user-avatar {
    height: 30px;
    border-radius: 50%;
    margin-left: 5px;
  }
  .logo {
    max-height: 70px;
  }
  .user-info {
    line-height: 70px;
  }
  .header {
    padding: 10px 0;
    background: #FFF;
    box-shadow: 0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04);
  }
  .logo {
    max-width: 100%;
  }

  @media screen and (max-width: 768px) {
    .logo {
      max-height: 50px;
    }
    .user-info {
      line-height: unset;
      padding-top: 5px;
      border-top: 1px solid #EEE;
    }
  }
</style>
