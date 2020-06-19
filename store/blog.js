export const state = () => ({
  blog: {},
})

export const mutations = {
  setBlog (state, blog) {
    state.blog = blog
  }
}
