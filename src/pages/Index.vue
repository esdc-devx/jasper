<template>
  <Layout>
    <div class="form-inline search-form search-form-round">
      <label for="search2" class="sr-only">Search</label>
      <input type="text" class="form-control" id="search2" placeholder="Search">
      <span class="search-form-addon"></span>
    </div>

    <!-- {{ $page.allDocPage.edges }} -->

    <div v-for="edge in $page.allDocPage.edges" v-bind:key="edge">
      <div class="card" v-for="doc in edge.node.data" v-bind:key="doc.title">
        <div class="card-body">
          <h2 class="card-title h5">
            <a :href="doc.url">{{ doc.title }}</a>
          </h2>
          <hr>
          <div class="card-subtitle mt-2">
            <p>
              <span
                class="badge badge-primary badge-tag"
                v-for="tag in doc.tags"
                v-bind:key="tag"
              >{{ tag }}</span>
            </p>
          </div>
          <p class="card-text">{{ doc.description }}</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allDocPage{
    edges {
      node {
        data {
          tags
          title
          description
          url
        }
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
