interface ApiResponse {
  code: string
  msg: string
  data: any
}

const baseURL = 'http://localhost:3001/tufang/'
const isDebug = localStorage.getItem('debug') === 'debug'

const api = (url, options?) => {
  return useFetch<ApiResponse>(() => url, {
    ...{
      baseURL,
      // onRequest({ request, options }) {
      //   console.log('[fetch request]', request, options)
      // },
      headers: {
        Authorization: `Bearer ${useRuntimeConfig().apiSecret || 'token'}`,
      },
      initialCache: false,
      // @ts-ignore
      onRequestError({ request, error }) {
        // eslint-disable-next-line no-console
        isDebug && console.log('[fetch request error]', request, error)
      },
      // @ts-ignore
      onResponse({ request, response }) {
        // eslint-disable-next-line no-console
        isDebug && console.log('[fetch response]', request, response)
      },
      // @ts-ignore
      onResponseError({ request, response }) {
        if (response.status !== 200) {
          throwError(response.statusText || '😱 服务异常')
        }
        // Log error
        // eslint-disable-next-line no-console
        isDebug && console.log('[fetch response error]', request, response.status, response.body)
      },
    },
    ...options,
  })
}

export { api }
