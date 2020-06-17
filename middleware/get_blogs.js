export default function (context) {
  context.app.$axios.get('api/blog')
    .then((response) => {
      context.store.commit('setBlogs', response.data)
    }, (error) => {
      console.log(error);
    });
}
