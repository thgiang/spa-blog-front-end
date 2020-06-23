<template>
  <div>
    <div class="search-area">
      <div class="row">
        <div class="col-md-12">
          <SearchBar></SearchBar>
        </div>
      </div>
    </div>

    <div style="padding: 10px">
      <h1>Kết quả tìm kiếm: {{this.$route.query["keyword"]}}</h1>
    </div>

    <div class="blog-list">
      <template v-for="(result, index) in this.$store.state.search.results.hits.hits">
        <BlogItem v-bind:blog="result._source"/>
      </template>
    </div>
    <div class="blog-page">
      <div class="row">
        <div class="col-md-12 text-center">
          <paginate
            v-model="currentPage"
            :page-count="Math.ceil(this.$store.state.search.results.hits.total.value/10)"
            :click-handler="goToPage"
            :prev-text="'Trang trước'"
            :next-text="'Trang tiếp'"
            :container-class="'my-pagination'">
          </paginate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import BlogItem from "~/components/BlogItem"
import Paginate from 'vuejs-paginate'
import SearchBar from '~/components/Searchbar'

export default {
  middleware: ['get_blogs_by_keyword'],
  components: {
    BlogItem,
    Logo,
    Paginate,
    SearchBar
  },
  data() {
    return {
      title: "",
      currentPage: 1
    }
  },
  head() {
    return {
      title: 'Kết quả tìm kiếm Blog GHTK'
    }
  },
  methods: {
    goToPage(p) {
      this.$router.push({ name: 'search', query: { keyword: this.$route.query['keyword'], page: p} })
    }
  },
  updated() {
    this.currentPage = parseInt(this.$route.query['page']);
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
