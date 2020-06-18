export default function (context) {
  context.app.$axios.get('api/blog?per_page=200')
    .then((response) => {
      context.store.commit('setBlogs', response.data)
    }, (error) => {
      console.log(error);
    });
}
