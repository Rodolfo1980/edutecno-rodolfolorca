<template>
  <div>
    <div class="container">
      <h1 class="text-center">PokeGuía de Rodolfo Lorca</h1>
      <div class="mb-3 row justify-content-center">
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="nombre"
            placeholder="Ingrese el nombre del pokémon"
          />
        </div>
        <div class="col-auto">
          <button @click="getData(nombre)" class="btn btn-primary">Buscar</button>
        </div>
      </div>
      <Card :movimientos="movimientos" :habilidades="habilidades" :url="url" :nombre="nombrePokemon" />
    </div>
  </div>
</template>
<script>
import Card from "./Card";
export default {
  name: "Body",
  data() {
    return {
      nombre: "",
      response: null
    };
  },
  methods: {
    async getData(name) {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const req = await fetch(url);
        const reqJSON = await req.json();
        this.response = reqJSON;
        console.log(reqJSON);
      } catch (error) {
        console.log(error);
      }
    },
  },
  // Funcion created se ejecuta solo al cargar por primera vez el componente
  created() {
      this.getData('pikachu')
  },
  computed: {
    movimientos() {
      if (this.response) return this.response.moves;
      return [];
    },
    habilidades() {
      if (this.response) return this.response.abilities;
      return [];
    },
    url() {
      if (this.response) return this.response.sprites.front_default;
      return "";
    },
    nombrePokemon() {
      if (this.response) return this.response.name;
      return "";
    },
  },
  components: {
    Card,
  },
};
</script>
<style scoped>
    h1 {
        margin: 30px 0;
    }
</style>