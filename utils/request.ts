import { useToast } from 'vue-toastification'

interface ApiResponse {
  code: string
  msg: string
  data: any
}

const isDebug = localStorage.getItem('debug') === 'debug'
const toast = useToast()

const api = (url, options?) => {
  return useFetch<ApiResponse>(url, {
    ...{
      baseURL: useRuntimeConfig().app.serverUrl,
      // onRequest({ request, options }) {
      //   console.log('[fetch request]', request, options)
      // },
      headers: {
        Authorization: `Bearer ${useRuntimeConfig().app.apiSecret || 'token'}`,
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
          const s = `Req: ${request};Msg: ${response.statusText}` || '😱 服务异常'
          toast.error(s)
          // throwError(s)
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
