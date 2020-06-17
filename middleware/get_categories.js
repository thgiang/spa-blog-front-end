import axios from 'axios'

export default function (context) {
  context.app.$axios.get('api/category')
    .then((response) => {
      context.store.commit('setCategories', response.data)
    }, (error) => {
      console.log(error);
    });
}
