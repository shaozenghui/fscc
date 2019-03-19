const mutations = {
  activeName (state, data) {
    console.log(data)
    state.activeName = data
    state.openNames = data.split('-')[0]
  }
}
export default mutations
