export const state = () => ({
  api_token: '',
  categories: [],
  blogs: []
})

export const mutations = {
  setApiToken (state, api_token) {
    state.api_token = api_token;
  },
  setCategories (state, categories) {
    state.categories = categories;
  },
  setBlogs (state, blogs) {
    state.blogs = blogs;
  }
}
