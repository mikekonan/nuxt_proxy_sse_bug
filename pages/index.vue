<template>
  <div class="container">
    Received messages - {{count}}
  </div>
</template>

<script>

  export default {
    mounted() {
      let self = this;

      const source = new EventSource('/topics', {
        withCredentials: true,
      });

      source.onopen = function () {
        console.log("Open");
      };

      source.onerror = function (e) {
        console.error(e);
      };

      source.onmessage = function (msg) {
        self.count++;
        console.log("msg: " + msg);
      };
    },
    components: {},
    data: function () {
      return {
        count: 0,
      }
    }
  }
</script>

<style>

</style>
