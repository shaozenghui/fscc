
export const saveLocal = store => {
  if (localStorage.activeName) store.state.activeName = localStorage.activeName
  store.subscribe((mutation, state) => {
    localStorage.activeName = state.activeName
  })
}
