<template>
  <div>
      <h1 :style="{color: this.color}">{{titulo}}</h1>
  </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        titulo: String, color: String
    }
}
</script>