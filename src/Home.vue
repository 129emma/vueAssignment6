<template>
  <div class="container">
    <table-title>
    </table-title>
    <hr>
    <repeat-times>
    </repeat-times>
    <hr>
    <table-footer>
    </table-footer>
  </div>
</template>

<script>
import title from './Title.vue';
import serverStatus from './ServerStatus.vue';
import footer from './Footer.vue';

export default {
  components: {
    'repeat-times': serverStatus,
    // it could be
    // serverStatus, --> ES6 expression
    // or
    // repeatTimes: serverStatus (without double quotation marks)
    // these three ways are all useful
    'table-title': title,
    'table-footer': footer
  }
}
</script>

<style lang="css">
</style>
