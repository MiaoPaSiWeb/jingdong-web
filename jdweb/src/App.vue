<template>
  <div id="app">
    <JdShortcut />
    <JdHeader />
    <JdFooter />
  </div>
</template>

<script>
import JdHeader from './components/Header'
import JdFooter from './components/Footer'
import JdShortcut from './/components/Shortcut'
export default {
  name: 'App',
  components: {
    JdShortcut,
    JdHeader,
    JdFooter
  }
}
</script>

<style>

</style>
