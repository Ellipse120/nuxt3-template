import { useMediaQuery } from '@vueuse/core'

export const useMediaQuerySmallScreen = () => {
  const isSmallerScreen = useMediaQuery(
    '(min-width: 1024px) and (max-width: 1600px)'
  )

  return {
    isSmallerScreen,
  }
}
