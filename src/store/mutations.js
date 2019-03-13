const mutations = {
  activeName (state, data) {
    state.activeName = data
    state.openNames = data.split('-')[0]
  }
}
export default mutations
