export default function (context) {
  context.app.$axios.get('api/blog?per_page=12')
    .then((response) => {
      context.store.commit('setBlogs', response.data)
    }, (error) => {
      console.log(error);
    });
}
