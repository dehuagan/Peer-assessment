
export default {
  fetch: function (STORAGE_KEY) {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function (STORAGE_KEY, items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  },
  delete: function (STORAGE_KEY) {
    window.localStorage.removeItem(STORAGE_KEY)
  }
}
