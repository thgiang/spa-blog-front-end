<template>
  <div class="user-edit">
    <h1>{{this.title}}</h1>
    <form @submit="saveUser">
      <div class="form-group">
        <label for="title">Tiêu đề bài viết</label>
        <input type="text" class="form-control" id="title" name="title"
               placeholder="Thủ tướng bổ nhiệm Thứ trưởng Bộ Khoa học và Công nghệ" v-model="blog.title">
      </div>

      <div class="form-group">
        <label for="name">Ảnh </label>
        <input type="text" class="form-control" id="name" name="name"
               placeholder="Directlink tới ảnh ví dụ: https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
               v-model="blog.thumbnail">
      </div>

      <div class="form-group">
        <label for="cat_id">Danh mục</label>
        <select class="form-control" id="cat_id" name="cat_id" v-model="blog.cat_id">
          <option v-for="category in this.$store.state.categories" :value="category.id">{{ category.name }}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Mô tả ngắn</label>
        <ckeditor rows="3" :editor="editor" name="description" v-model="blog.description"
                  :config="editorDescriptionConfig"></ckeditor>
      </div>

      <div class="form-group">
        <label>Nội dung chi tiết</label>
        <ckeditor rows="10" :editor="editor" name="description" v-model="blog.content"
                  :config="editorContentConfig"></ckeditor>
      </div>

      <button type="submit" class="btn btn-primary col-md-12">LƯU</button>
    </form>
    <notifications group="notification" position="bottom right"/>
  </div>
</template>
<script>
let ClassicEditor;
let CKEditor;
require("@ckeditor/ckeditor5-build-classic/build/translations/vi");
ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
CKEditor = require("@ckeditor/ckeditor5-vue");

export default {
  components: {
    CKEditor
  },
  props: ['title', 'prop_blog'],
  data() {
    return {
      blog: {
        id: 0,
        title: '',
        cat_id: 1,
        thumbnail: '',
        description: '',
        content: ''
      },
      editor: ClassicEditor,
      editorDescriptionConfig: {
        /*
        language: "vi-vn",
         */
        toolbar: {
          items: [
            "bold",
            "italic",
            "|",
            "link"
          ]
        }
      },
      editorContentConfig: {}
    }
  },
  watch: {
    prop_blog: function(newVal, oldVal) { // watch it
      this.blog = Object.assign({}, newVal)
    }
  },
  methods: {
    saveUser(e) {
      let self = this;
      this.$axios.post('/api/blog-manager/save', self.blog).then(response => {
        if (response.data.status === "success") {
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
            text: 'Lỗi khi lưu: ' + response.data.message
          });
        }
      }).catch(error => {
        alert("Lỗi lưu bài viết: " + error);
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
