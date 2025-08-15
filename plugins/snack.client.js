import { defineNuxtPlugin } from '#app'
import Snack from 'snack'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Snack)
})