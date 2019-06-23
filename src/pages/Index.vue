<template>
  <Layout>
    <div class="form-inline search-form search-form-round">
      <label for="search2" class="sr-only">Search</label>
      <input v-model="searchTerm" type="text" class="form-control" id="search2" placeholder="Search">
      <span class="search-form-addon"></span>
    </div>

    <div
      class="card mb-2 d-inline-block"
      style="max-width: 18rem;"
      v-for="edge in $page.posts.edges"
      v-bind:key="edge.node.title"
    >
      <div class="card-body">
        <h2 class="card-title h5">
          <a :href="edge.node.url">{{ edge.node.title }}</a>
        </h2>
        <hr>
        <div class="card-subtitle mt-2">
          <p>
            <span
              class="badge badge-primary badge-tag"
              v-for="tag in edge.node.tags"
              v-bind:key="tag"
            >{{ tag }}</span>
          </p>
        </div>
        <p class="card-text">{{ edge.node.description }}</p>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  allDocPage(filter: {tags: {contains{ "im"}}}) {
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
import imdocs from "@/data/policy-im.yaml";
import itdocs from "@/data/policy-it.yaml";
import imitdocs from "@/data/policy-imit.yaml";
import itpins from "@/data/itpin.yaml";
import _ from "lodash";
//import lunr from "lunr";

export default {
  mounted() {
    this.docs = imdocs.concat(itdocs, imitdocs, itpins); //.map(doc => {

    var idx = lunr(function() {
      this.ref("title");
      this.field("title");
      this.field("description");
      this.field("tags");

      docs.forEach(function(doc) {
        this.add(doc);
      }, this);
    });
  },
  computed: { 
    searchTerm: ""
  },
  data() {
    return {
      docs: [],
      idx: {},
    };
  },
  metaInfo: {
    title: "Jasper"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
