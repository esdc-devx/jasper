<template>
  <Layout>
    <div class="form-inline search-form search-form-round">
        <label for="search2" class="sr-only">Search</label>
        <input type="text" class="form-control" id="search2" placeholder="Search">
        <span class="search-form-addon"></span>
    </div>

    <div
      class="card mb-2 d-inline-block"
      style="max-width: 18rem;"
      v-for=" doc in docs"
      v-bind:key="doc.title"
    >
      <div class="card-body">
        <h2 class="card-title h5"><a :href="doc.url">{{ doc.title }}</a></h2>
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
  </Layout>
</template>

<script>
import imdocs from "@/data/policy-im.yaml";
import itdocs from "@/data/policy-it.yaml";
import imitdocs from "@/data/policy-imit.yaml";
import itpins from "@/data/itpin.yaml";
import _ from "lodash";

export default {
  mounted() {
    this.docs = imdocs.concat(itdocs, imitdocs, itpins).map(doc => { 
      return { 
      title: doc.title,
      description: _.truncate(doc.description, { 'length': 256 }),
      url: doc.url,
      tags: doc.tags,
      }
    });

  },
  data() {
    return {
      docs: []
    };
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
