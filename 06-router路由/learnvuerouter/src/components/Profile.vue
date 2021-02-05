<template>
  <div>
    <h2>这是Profile</h2>
    {{ $route.query }}
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.age }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style>

</style>
