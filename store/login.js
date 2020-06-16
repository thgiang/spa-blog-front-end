export const state = () => ({
  username: '',
  password: '',
  warning: ''
})

export const mutations = {
  username (state, text) {
    state.username = text
  },
  password (state, text) {
    state.password = text
  },
  warning (state, text) {
    state.warning = text
  }
}
