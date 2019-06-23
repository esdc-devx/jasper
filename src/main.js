// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/aurora.css'
import '~/assets/css/global.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)


// Add a meta tag
head.meta.push({
  name: 'keywords',
  content: 'App,Application,policy'
})

head.meta.push({
  "http-equiv":"X-UA-Compatible",
   content:"IE=edge"
})

head.meta.push({
   charset:"utf-8"
})

head.meta.push({
  name:"viewport",
  content:"width=device-width,initial-scale=1.0"
})
}
