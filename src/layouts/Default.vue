<template>
  <div class="layout">
    <header class="header">
      <h1>Jasper Policy Instrument Explorer</h1>
    </header>
    <main id="mainContent" role="main">
    <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>


<style>
</style>