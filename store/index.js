export const state = () => ({
  api_token: '',
  categories: []
})

export const mutations = {
  setApiToken (state, api_token) {
    state.api_token = api_token;
  },
  setCategories (state, categories) {
    state.categories = categories;
  }
}
