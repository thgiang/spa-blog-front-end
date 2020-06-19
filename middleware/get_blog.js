export default function (context) {
  let url = 'api/blog/';
  if(context.route.params.id) {
    if(context.route.params.id === "0") {
      return context.redirect('/');
    }
    url += context.route.params.id;
  } else {
    return context.redirect('/');
  }

  context.app.$axios.get(url)
    .then((response) => {
      context.store.commit('blog/setBlog', response.data)
    }, (error) => {
      console.log(error);
    });
}
