export const state = () => ({
  api_token: ''
})

export const mutations = {
  setApiToken (state, api_token) {
    state.api_token = api_token;
  }
}
