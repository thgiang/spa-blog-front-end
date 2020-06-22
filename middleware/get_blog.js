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
      if(response.data.id === parseInt(context.route.params.id)) {
        context.store.commit('blog/setBlog', response.data)
      } else {
        return context.redirect('/');
      }
    }, (error) => {
      console.log(error);
    });
}
