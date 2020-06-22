export const state = () => ({
  users: {
    last_page: 0
  },
  user: {}
})

export const mutations = {
  setUsers (state, users) {
    state.users = users
  },
  setUser (state, user) {
    state.user = user
  },
  setUserName (state, name) {
    state.user.name = name
  },
  setUserEmail (state, email) {
    state.user.email = email
  },
  setUserRole (state, email) {
    state.user.role = email
  },
  setUserPassword (state, email) {
    state.user.password = email
  },
}
