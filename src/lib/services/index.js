import { readable } from 'svelte/store'

const orientationEvent = 'deviceorientation'

export const orientation = readable(null, set => {
  window.addEventListener(orientationEvent, set)
  return () => window.removeEventListener(orientationEvent, set)
})
