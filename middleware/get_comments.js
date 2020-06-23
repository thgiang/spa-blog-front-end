export default function (context) {
  let per_page = 20;
  let url = 'api/comment-manager?per_page='+per_page;
  if(context.route.query.hasOwnProperty('page') && parseInt(context.route.query['page']) > 0) {
    url += '&page='+context.route.query['page'];
  }

  context.app.$axios.get(url)
    .then((response) => {
      context.store.commit('commentmanager/setComments', response.data)
    }, (error) => {
      console.log(error);
    });
}
