<template> 
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <img :src="url" class="card-img-top" alt="Pokemon" />
          <div class="card-body">
            <h1 class="card-title text-capitalize text-center"><b>{{ nombre }}</b></h1>
            <h6><b><u>Movimientos</u></b></h6>
            <ul>
                <li v-for="(item, indice) in movimientos" :key="'movimiento_'+indice">{{ item.move.name }}</li>
            </ul>
            <h6><b><u>Habilidades</u></b></h6>
            <ul>
                <li v-for="(item, indice) in habilidades" :key="'habilidad_'+indice">{{ item.ability.name }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: "",
    },
    habilidades: {
      type: Array,
      default: () => [],
    },
    movimientos: {
      type: Array,
      default: () => [],
    },
    nombre: String,
  },
};
</script>
<style scoped>
</style>