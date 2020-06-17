<template>
  <div style="">
  <div class="container blog-list">
    <div class="row">
      <div class="col-md-6 blog-item" v-for="(blog, index) in this.$store.state.blogs">
        <div class="row" v-if="parseInt(index) >= currentPage * perpage && parseInt(index) <= (currentPage+1) * perpage">
        <div class="col-4">
          <img :src="blog.thumbnail" width="100%"/>
        </div>
          <div class="col-8">
            <h3>{{blog.title}}</h3>
            <p>{{blog.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import vueSmoothScroll from 'vue2-smooth-scroll'

  export default {
    components: {
      Logo
    },
    data() {
      return {
        perpage: 10,
        currentPage: 10,
        lastScrollTop: 0
      }
    },
    head() {
      return {
        title: 'Trang chủ - Blog GHTK'
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll (event) {
        let lastPage = this.currentPage;
        let st = window.pageYOffset;
        let lastScrollPosition = document.body.offsetHeight;
        if(st === 0) {
          this.currentPage = Math.max(1, this.currentPage - 1);
        }
        let sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
        if(st + sbHeight >= window.innerHeight) {
          this.currentPage = Math.min(this.currentPage + 1, this.$store.state.blogs.length / this.perpage);
        }
        if(lastPage !== this.currentPage) {
          let firstBlog = document.getElementsByClassName("blog-item")[0];
          window.scrollTo(0, firstBlog.offsetTop);

          /*
          this.$smoothScroll({
            scrollTo: firstBlog
          })
           */
        }
      }
    }
  }
</script>

<style scoped>
  .blog-list {
    min-height: 110vh;
    margin-top: 20px!important;
    background: #FFF;
    font-size: 12px;
  }
  .blog-list h3 {
    font-size: 15px;
  }
  .blog-list p {
    text-align: justify;
  }
  .container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
