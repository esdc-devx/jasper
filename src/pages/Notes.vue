<template>
  <Layout>
    <div v-for="edge in $page.allnotes.edges" :key="edge">
      <h2>{{ edge.node.title }}</h2>
      <p>
        <span
          class="badge badge-primary badge-tag"
          v-for="tag in edge.node.tags"
          v-bind:key="tag"
        >{{ tag }}</span>
      </p>
    </div>
  </Layout>
</template>

<page-query>
query {
  allnotes{
    edges {
      node {
        title,
        tags
      }
    }
  }
}

</page-query>

<script>
export default {
  metaInfo: {
    title: "Jasper"
  }
};
</script>

<style>
</style>
