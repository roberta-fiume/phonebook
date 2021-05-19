<template>
  <div class="app-wrapper">
    <h1>ACME Contact Directory</h1>
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  font-family: sans-serif;
  font-size: 1.2em;
  background-color: #f2f2f2;
  color: #333;
  text-align: center;
}
input,
button {
  font-size: 1.5em;
  padding: 0.25em 0.5em;
  border: none;
  border-radius: 0.3em;
}

input {
  background-color: white;
  margin-right: 0.5em;
}
button {
  background-color: #333;
  color: white;
}
.app-wrapper {
  width: 30em;
  max-width: 100%;
  padding: 2em 0;
  margin: 0 auto;
}

.search-box {
  margin-bottom: 1em;
}

.contact-details,
.results {
  padding: 1em;
  background: white;
  border-radius: 1em;
}

h1,
h2 {
  text-align: center;
  margin-top: 0;
  margin-bottom: 1em;
}

a {
  text-decoration: none;
  color: inherit;
}

ol {
  list-style: none;
  padding: 0;
}
ol li {
  margin-bottom: 0.5em;
}
ol li a {
  display: block;
  background-color: #444;
  border-radius: 0.5rem;
  color: white;
  padding: 0.5em;
}
dl {
  text-align: left;
}
dt {
  font-weight: bold;
  float: left;
  padding-right: 1em;
}
dd {
  clear: right;
}
</style>
