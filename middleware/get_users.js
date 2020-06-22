export default function (context) {
  let per_page = 1;
  let url = 'api/user-manager?per_page='+per_page;
  if(context.route.params.id) {
    if(context.route.params.id === "0") {
      return context.redirect('/');
    }
    url = 'api/category/'+context.route.params.id+'?per_page='+per_page;
  }
  if(context.route.query.hasOwnProperty('page') && parseInt(context.route.query['page']) > 0) {
    url += '&page='+context.route.query['page'];
  }

  context.app.$axios.get(url)
    .then((response) => {
      context.store.commit('usermanager/setUsers', response.data)
    }, (error) => {
      console.log(error);
    });
}
