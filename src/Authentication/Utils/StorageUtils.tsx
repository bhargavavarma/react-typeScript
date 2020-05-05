import Cookie from 'js-cookie'

export const ACCESS_TOKEN = 'f5af9f51-07e6-4332-8f1a-c0c11c1e3434'

export function getCookie(key: any) {
  return Cookie.get(key)
}

function setCookie(key: any, value: any) {
  Cookie.set(key, value, {
    expires: 30,
    path: '/',
  })
}

export function getAccessToken() {
  return getCookie(ACCESS_TOKEN)
}
export function setAccessToken(accessToken) {
  setCookie(ACCESS_TOKEN, accessToken)
}

export function clearUserSession() {
  Cookie.remove(ACCESS_TOKEN, { path: '/' })
}
