<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>Jasper Policy Instrument Explorer</h1>

    <ul v-for="doc in docs" v-bind:key="doc.title">
      <li >

        <p>{{ doc.title }} </p>
        <ul v-for="tag in doc.tags" v-bind:key="tag">
          <li>{{ tag }}</li>
          </ul>
        <p>{{ doc.description }}</p>

      </li>
    </ul>   

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
import imdocs from "@/data/policy-im.yaml"
import itdocs from "@/data/policy-it.yaml"
import imitdocs from "@/data/policy-imit.yaml"


export default {
  mounted() { 
   this.docs = imdocs.concat(itdocs, imitdocs);
  },
  data() {  return  { 
      docs: []
    }
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
