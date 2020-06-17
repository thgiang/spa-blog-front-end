<template>
  <div class="h-100">
    <div class="fixed-background">
      <main>
        <div class="container">
          <div class="row h-100">
            <div class="col-md-10 col-12">
              <div class="my-auto card auth-card">
                <div class="position-relative image-side">
                  <p class="text-white h2">ĐĂNG NHẬP GHTK PRIVATE BLOG</p>
                </div>
                <div class="position-relative form-side">
                  <img src="~assets/images/logo.png" width="100%">
                  <hr/>

                  <div class="">
                    <fieldset class="form-group has-float-label mb-4">
                      <legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0">
                        Username hoặc Email
                      </legend>
                      <div tabindex="-1" role="group" class="bv-no-focus-ring">
                        <input type="text" class="form-control" v-model="username">
                      </div>
                    </fieldset>
                    <fieldset class="form-group has-float-label mb-4">
                      <legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0">Mật khẩu</legend>
                      <div tabindex="-1" role="group" class="bv-no-focus-ring">
                        <input type="password" v-model="password" class="form-control">
                      </div>
                    </fieldset>
                    <strong class="text-danger" v-if="warning !== ''">
                      {{warning}}
                    </strong>
                    <strong v-else>
                      &nbsp;
                    </strong>
                    <div class="d-flex justify-content-end align-items-center">

                      <button @click="userLogin()" type="submit"
                              class="btn btn-primary btn-lg btn-multiple-state btn-shadow col-md-12"><span
                        class="spinner d-inline-block"><span class="bounce1"></span> <span class="bounce2"></span> <span
                        class="bounce3"></span></span> <span class="icon success"><i
                        class="simple-icon-check"></i></span>
                        <span class="icon fail"><i class="simple-icon-exclamation"></i></span> <span class="label">ĐĂNG NHẬP</span>
                      </button>
                      <!--
                      <a href="/admin/user/register" class="btn ml-2 btn-shadow btn-primary btn-lg" target="_self">Chưa có
                        tài khoản?
                      </a>
                      -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<style scoped>
  body {
    height: 100vh !important;
  }

  .fixed-background {
    background: url('~assets/images/balloon.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .auth-card {
    border: none;
    border-radius: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-shadow: 0 1px 15px rgba(0, 0, 0, .04), 0 1px 6px rgba(0, 0, 0, .04);
    box-shadow: 0 1px 15px rgba(0, 0, 0, .04), 0 1px 6px rgba(0, 0, 0, .04);
    margin-top: 10% !important;
  }

  .auth-card .image-side {
    border: none;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    width: 40%;
    background: url('~assets/images/login-balloon.jpg') no-repeat center top;
    background-size: cover;
    padding: 80px 25px;
  }

  .auth-card .form-side {
    background: #FFF;
    border-radius: 10px;
    width: 60%;
    padding: 80px;
  }

  @media (max-width: 991px) {
    .auth-card {
      display: block;
    }

    .auth-card .form-side, .auth-card .image-side {
      width: 100%;
      padding: 40px;
      border-radius: 0;
    }

    .auth-card {
      border-radius: 0;
    }
  }
</style>

<script>
  export default {
    layout: 'blank',
    auth: false,
    middleware: ['login'],
    head() {
      return {
        title: 'Đăng nhập'
      }
    },
    watch: {
      username: function () {
        this.$store.commit('login/warning', "");
      },
      password: function () {
        this.$store.commit('login/warning', "");
      }
    },
    computed: {
      username: {
        get() {
          return this.$store.state.login.username
        },
        set(value) {
          this.$store.commit('login/username', value)
        }
      },
      password: {
        get() {
          return this.$store.state.login.password
        },
        set(value) {
          this.$store.commit('login/password', value)
        }
      },
      warning: {
        get() {
          return this.$store.state.login.warning
        },
        set(value) {
          this.$store.commit('login/warning', value)
        }
      }
    },
    methods: {
      async userLogin() {
        let _store = this.$store;
        let _auth = this.$auth;
        let loginData = {'username': this.$store.state.login.username, 'password': this.$store.state.login.password};
        try {
          let response = await this.$auth.loginWith('local', {data: loginData})
          if (response.data.status === 'success') {
            await this.$router.push('/');
          } else {
            _store.commit('login/warning', response.data.message);
          }
        } catch (error) {
          _store.commit('login/warning', error);
        }
      },
    }
  }
</script>
