<template>
  <div>
    <div class="header" id="header">
      <Header/>
    </div>

    <div class="sidebar" id="sidebar">
      <Sidebar/>
    </div>

    <div class="container-fluid main-content">
      <div class="row">
        <div class="col-12">
          <div class="">
            <nuxt/>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid text-center">
      <div class="footer" id="footer">
        <Footer/>
      </div>
    </div>

  </div>
</template>

<style>
  html {
    overflow-x: hidden;
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .main-content {
    padding-top: 20px;
    padding-left: 135px;
  }

  .footer {
    padding-left: 135px;
  }

  .sidebar {
    border-right: 1px solid #EEE;
    margin-top: 0px;
    position: fixed;
    width: 120px;
    height: 100vh;
    top: 0;
    left: 0;
    background: #FFF;
  }

  @media (max-width: 768px) {
    .main-content, .footer {
      padding: 10px 0;
    }
    .sidebar {
      top: 0;
      margin-top: 0;
      display: block;
      position: relative;
      width: 100%;
      height: unset;
      border-top: 1px solid #EEE;
      padding-top: 0;
    }
  }
</style>
<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import Sidebar from "../components/Sidebar";

  export default {
    components: {Sidebar, Footer, Header},
  }
</script>
