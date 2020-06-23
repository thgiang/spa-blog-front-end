<template>
  <div class="search-form">
    <form @submit="searchNow" class="form-inline">
      <!--
      <select class="form-control col-2" id="cat_id" name="cat_id" v-model="cat_id">
        <option value="0">Tất cả danh mục</option>
        <option v-for="category in this.$store.state.categories" :value="category.id">{{ category.name }}</option>
      </select>
      -->
      <input type="text" class="form-control col-sm-10 col-8" id="keyword" name="keyword" v-model="keyword"
             style="border: 1px solid rgb(232, 232, 232)!important;"
             placeholder="Từ khóa tìm kiếm">
      <button class="btn btn-danger col-sm-2 col-4" type="submit">Tìm kiếm</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: this.$route.query['keyword'] ? this.$route.query['keyword'] : "",
      cat_id: this.$route.query['cat_id'] ? this.$route.query['cat_id'] : 0
    }
  },
  methods: {
    searchNow(e) {
      //this.$router.push({name: 'search', params: {}, query: {'cat_id': this.cat_id, 'keyword': this.keyword}});
      this.$router.push({name: 'search', params: {}, query: {'keyword': this.keyword}});
      e.preventDefault();
    }
  }
}
</script>
<style>
.search-form {
  background: #FFF;
  padding: 10px;
}

.search-form input, .search-form select, .search-form button {
  border-radius: 0 !important;
  border: 0 !important;
}

.search-form button.btn-danger {
  border: 1px solid #dc3545 !important;
}

.search-form input:focus, .search-form select:focus, .search-form button:focus, .search-form button:active {
  box-shadow: none;
}
</style>
