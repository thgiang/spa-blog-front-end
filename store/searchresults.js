export const state = () => ({
  blogs: [],
})

export const mutations = {
  setBlogs (state, blogs) {
    state.blogs = blogs
  }
}
