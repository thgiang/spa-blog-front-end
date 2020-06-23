export default function (context) {
  //let per_page = 10;
  let url = '';
  if (!context.route.query.hasOwnProperty('keyword')) {
    return context.redirect('/');
  }

  let page = 1;
  if (context.route.query.hasOwnProperty('page')) {
    page = parseInt(context.route.query['page']);
    if (page < 1) {
      page = 1;
    }
  }
  url += '/api/search-blog/?keyword=' +context.route.query['keyword']+ '&page=' + page;

  context.app.$axios.get(url)
    .then((response) => {
      context.store.commit('search/setResults', response.data)
    }, (error) => {
      console.log(error);
    })
}


/*
export default function (context) {
  //let per_page = 10;
  let url = '';
  if (!context.route.query.hasOwnProperty('keyword') || !context.route.query.hasOwnProperty('cat_id')) {
    return context.redirect('/');
  }

  let page = 1;
  if (context.route.query.hasOwnProperty('page')) {
    page = parseInt(context.route.query.hasOwnProperty('page'));
    if (page < 1) {
      page = 1;
    }
  }
  url += '/api/search-blog/?cat_id=' + context.route.query['cat_id'] + '&keyword=' + context.route.query['keyword'] + '&page=' + page;

  context.app.$axios.get(url)
    .then((response) => {
      context.store.commit('setBlogs', response.data)
    }, (error) => {
      console.log(error);
    })
}
*/
