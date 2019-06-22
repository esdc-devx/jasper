
<!DOCTYPE html>
<html lang="en-CA">

<head>
  <title>ITSG-33 Yaml Explorer</title>

  <meta charset="utf-8">
  <meta name="description" v-bind:content="description">
  <meta name="keywords" content="App,Application,Hub,Dashboard,Code,Coverage,Automated,Unit Test">
  <meta name="author" v-bind:content="author">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
  <script src="helper/startswith.js" type="text/javascript"></script>
  <!--  CDTS implementation -->
  <script type="text/javascript"
    src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_30/cdts/compiled/soyutils.js"></script>
  <script type="text/javascript"
    src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_30/cdts/compiled/wet-en.js"></script>

  <script type="text/javascript">
    document.write(wet.builder.refTop({
      cdnEnv: 'prod',
      subTheme: 'gcweb',
      jqueryEnv: 'external',
      localPath: '',
      isApplication: true
    }));
  </script>

  <script type="text/javascript" src="helper/wet.js"></script>
</head>

  <body vocab="http://schema.org" typeof="WebPage">
  <div id="def-top"></div>
    <noscript>
      <strong>We're sorry but apphub doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <main id="wb-cont" role="main" property="mainContentOfPage" class="container">
    <div id="app"></div>
    <!-- built files will be auto injected -->

    <div id="def-preFooter"></div>
    </main>
  <div id="def-footer"></div>
</body>
</html>




<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
    <slot/>
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
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
