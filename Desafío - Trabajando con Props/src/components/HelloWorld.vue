<template>
  <div class="hello">
     <h2>Lista</h2>
    <div class="containerList">
      <ul>
        <li v-for="(task, index) in tasks" :key=task>
          {{task}}
          <button v-on:click="remove(index)">eliminar</button>
        </li> 
        </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
      tasks: Array ,
    },
    methods: {
      remove(index) {
        this.$emit("del",index);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>