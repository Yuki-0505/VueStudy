<template>
  <div>
    <h2>{{ message }}</h2>
    <Cpn/>
  </div>
</template>

<script>
import Cpn from './Cpn';

export default {
  name: "App",
  data() {
    return {
      message: "hello world!!!!",
    };
  },
  components: {
    Cpn
  }
};
</script>

<style scoped>
</style>