<template>
  <div>
    <div class="blog-list">
      <template v-for="(blog, index) in this.$store.state.blogs.data">
        <BlogItem v-bind:blog="blog"/>
      </template>
    </div>
    <div class="blog-page">
      <div class="row">
        <div class="col-md-12 text-center">
          <paginate
            v-model="currentPage"
            :page-count="this.$store.state.blogs.last_page"
            :click-handler="goToPage"
            :prev-text="'Trang trước'"
            :next-text="'Trang tiếp'"
            :container-class="'my-pagination'">
          </paginate>
          <!--
          Trang {{this.currentPage}} trên tổng số {{this.$store.state.blogs.last_page}} trang.<br/>
          <nuxt-link :to="{ name: 'category-id', params: {id: $route.params.id}, query: { page: prevPage}}" v-if="prevPage !== 0">Trang trước
          </nuxt-link>
          &nbsp;
          <nuxt-link :to="{ name: 'category-id', params: {id: $route.params.id}, query: { page: nextPage}}" v-if="nextPage !== 0">Trang tiếp
          </nuxt-link>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import BlogItem from "~/components/BlogItem"
  import Paginate from 'vuejs-paginate'

  export default {
    middleware: ['get_blogs'],
    components: {
      BlogItem,
      Logo,
      Paginate
    },
    data() {
      return {
        title: "",
        currentPage: 1
      }
    },
    head() {
      return {
        title: this.title + ' - Blog GHTK'
      }
    },
    methods: {
      goToPage(p) {
        this.$router.push({ name: 'category-id', params: {id: this.$route.params.id}, query: { page: p} })
      }
    },
    mounted() {
      this.$store.commit('setCurrentCategory', this.$route.params.id);
    },
    updated() {
      this.currentPage = parseInt(this.$route.query['page']);
      if (this.$store.state.blogs.data.length > 0) {
        this.title = this.$store.state.blogs.data[0].category.name;
      }
    }
  }
</script>
<style scoped>
  .blog-list {
    font-size: 12px;
    overflow: hidden;
    clear: both;
    display: block;
  }

  .blog-page {
    width: 100%;
    clear: both;
    padding: 0 15px;
  }

  .blog-list h3 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 23px;
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
