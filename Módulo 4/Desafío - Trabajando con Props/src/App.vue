<template>
  <div id="app">
    <h1>Trabajando con Props</h1>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Crear nueva tarea</h1>
    <h2>{{errorMessage}}</h2>
    <label for="tarea"> Tarea </label>
    <input
      type="text"
      id="tarea"
      v-model="newTask"
      placeholder="Ingresa una nueva tarea"
    /><br><br>
    <button @click="addTask" class="btn-1">Crear</button>
    <HelloWorld msg="Listas" :tasks="tasks" @del="deleteTask"/><br><br><br><br>
    <footer>
      <p>Rodolfo Lorca - Desafío Latam 2021</p>
    </footer>  
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  data() {
    return {
      newTask: "",
      tasks: [],
      errorMessage: "",
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    addTask() {
      if (this.newTask == "") return false
      
      let lowerTasks = this.tasks.map((task) =>
          task.toLowerCase().replace(" ", "")
      );
      if (!lowerTasks.includes(this.newTask.toLowerCase().replace(" ", ""))) {
        this.tasks.push(this.newTask);
        this.errorMessage = "";
      } else {
        this.errorMessage = "La tarea ya existe";
      }
      this.newTask = "";
    },
    deleteTask(index){
      this.tasks.splice(index,1);
    }
  },
};
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
