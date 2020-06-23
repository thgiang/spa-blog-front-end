<template>
  <div class="blog-comments">
    <hr/>
    <h3>Ý KIẾN BẠN ĐỌC</h3>
    <form @submit="postComment" class="form-inline my-comment-area">
      <input type="text" class="form-control col-sm-10 col-12" id="my_comment" name="comment" v-model="my_comment"
             style="border-left: 1px solid #c5c5c5!important;"
             placeholder="Bạn nghĩ thế nào về bài viết này?">
      <button class="btn btn-danger col-sm-2 col-12" type="submit">Gửi bình luận</button>
    </form>

    <div class="blog-comment" v-for="comment in comments">
      <div class="comment-avatar">
        <img :src="comment.user.avatar" alt="Avatar"/>
      </div>
      <div class="comment-content">
        <strong>{{ comment.user.name }}</strong>: {{ comment.text }}
      </div>
    </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
      comments: [],
      my_comment: ""
    }
  },
  mounted() {
    this.$axios.get('api/comment/' + this.$route.params.id)
      .then((response) => {
        this.comments = response.data.data
      }, (error) => {
        console.log(error);
      });
  },
  methods: {
    postComment(e) {
      if (this.my_comment === "") {
        alert("Vui lòng nhập nội dung bình luận");
        return
      } else {
        let self = this;
        this.$axios.post('api/comment/' + this.$route.params.id, {text: this.my_comment})
          .then((response) => {
            self.comments.unshift(response.data.data);
            self.my_comment = "";
          }, (error) => {
            console.log(error);
          });
      }
      e.preventDefault();
    }
  }
}
</script>
<style>
.blog-comments {
  background: #FFF;
  padding: 10px;
}

.blog-comment {
  border-top: 1px solid #EEE;
  padding: 5px 0;
  clear: both;
  overflow: hidden;
}

.comment-avatar {
  float: left;
  padding: 5px;
  background: whitesmoke;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.comment-avatar img {
  width: 100%;
}

.my-comment-area input, .my-comment-area button {
  border-radius: 0;
}

.my-comment-area {
  padding: 10px;
  background: whitesmoke;
}
</style>
