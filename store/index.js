export const state = () => ({
  api_token: '',
  categories: [],
  blogs: [],
  current_category: 0,
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
  },
  setCurrentCategory (state, current_category) {
    state.current_cat_id = current_category;
  },
}
