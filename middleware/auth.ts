export default defineNuxtRouteMiddleware(async (to) => {
  const { $api } = useNuxtApp()
  const { data } = await $api('/login', {
    method: 'post',
    body: {
      name: 'admin',
      password: '123',
    },
  })

  if (data.value?.data?.valid) {
    navigateTo(to)
  } else {
    return '/login'
  }
})
