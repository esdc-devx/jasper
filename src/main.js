// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.script.push({
    src: "https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_30/cdts/compiled/soyutils.js",
  });
  head.script.push({
    src: "https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_30/cdts/compiled/wet-en.js",
  });
  head.script.push({ 
    innerHTML: ` document.write(wet.builder.refTop({
        cdnEnv: 'prod',
        subTheme: 'gcweb',
        jqueryEnv: 'external',
        localPath: '',
        isApplication: true
      }));
    `,
    type:"text/javascript",
  })


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
