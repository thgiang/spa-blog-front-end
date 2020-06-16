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
                  <a href="/admin/user/login#" class="router-link-exact-active active"><img
                    src="~assets/images/logo.png" width="100%"></a>
                  <hr/>
                  <form class="av-tooltip tooltip-label-bottom">
                    <fieldset class="form-group has-float-label mb-4">
                      <legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0">
                        E-mail
                      </legend>
                      <div tabindex="-1" role="group" class="bv-no-focus-ring">
                        <input type="text" class="form-control">
                      </div>
                    </fieldset>
                    <fieldset class="form-group has-float-label mb-4">
                      <legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0">Mật khẩu</legend>
                      <div tabindex="-1" role="group" class="bv-no-focus-ring">
                        <input type="password" class="form-control">
                      </div>
                    </fieldset>
                    <div class="d-flex justify-content-end align-items-center">
                      <button type="submit" class="btn btn-primary btn-lg btn-multiple-state btn-shadow col-md-12"><span
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
                  </form>
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
    padding: 80px 40px;
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
    head() {
      return {
        title: 'Đăng nhập'
      }
    }
  }
</script>
