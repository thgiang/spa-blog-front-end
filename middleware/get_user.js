export default function (context) {
  let url = 'api/user-manager/show/';
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
      context.store.commit('usermanager/setUser', response.data)
    }, (error) => {
      console.log(error);
    });
}
