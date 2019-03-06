import Cookies from 'js-cookie'
// import clonedeep from 'clonedeep'

export const setTitle = (title) => {
  window.document.title = title || 'admin'
}
export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}

export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}
