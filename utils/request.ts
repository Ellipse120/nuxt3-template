const base = 'http://localhost:3001/'

const api = (url) => {
  return useFetch(base + url)
}

export { api }
