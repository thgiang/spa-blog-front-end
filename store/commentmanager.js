export const state = () => ({
  comments: {
    last_page: 0
  }
})

export const mutations = {
  setComments (state, comments) {
    state.comments = comments
  }
}
