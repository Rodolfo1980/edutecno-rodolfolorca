<template>
  <div class="contenido">
    <!-- Título -->
    <div class="titulo">
      <h1> Random Gif Cat </h1>
      <h4> Rodolfo Lorca - Desafío Latam 2021 </h4>
    </div>
    <!-- Filtros -->
    <div class="Filtros">
      <!-- Mensaje de entrada (Título) -->
      <p class="instruccion">
        Título:
        <input
          v-model="mensaje"
          class="mensajeInput altoInput"
          type="text"
          placeholder="Ingrese un título"
        />
      </p>
      <!-- Filtro fotográfico del gif -->
      <p class="instruccion">
        Filtro:
        <select v-model="filtroSclt" class="filtroFoto altoInput">
          <option disabled selected> Selecciona </option>
          <option
            @click="filtroSclt = elemento"
            v-for="elemento in filtros"
            :key="elemento"
            :value="elemento"
          >
            {{ elemento }}
          </option>
        </select>
      </p>
      <!-- Color del título sobre la imagen -->
      <div class="instruccion">
        <p class="color">
          Color:
          <select class="colorFuente altoInput" v-model="colorSclt">
            <option disabled selected> Selecciona </option>
            <option
              @click="colorSclt = elemento"
              v-for="elemento in colores"
              :key="elemento"
              :value="elemento"
            >
              {{ elemento }}
            </option>
          </select>
        </p>
        <!-- Círculo de color según elección del mismo -->
        <div
          :style="{ 'background-color': this.colorSclt }"
          class="circuloColor"
        ></div>
      </div>
      <!-- Tamaño letra -->
      <p class="instruccion">
        Tamaño:
        <input
          v-model.number="tamanoLetra"
          class="tamanoFuente altoInput"
          type="number"
          min="1"
          placeholder="Ingrese un número"
        />
      </p>
    </div>
    <!-- Resultado imágen -->
    <div class="gif">
      <!-- Botón Generador -->
      <button @click="gatito" class="btnGato"> Obtener mi gatito </button>
      <!-- Imágen GIF -->
      <div>
        <img v-if="imagenRes" :src="imagenRes" alt="Gatito" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // Componente App
  name: "App",
  data() {
    return {
       // Propiedad mensaje para almacenar el título ingresado en el input 
      mensaje: "",
       // Propiedad filtros contiene un array con los filtros a utilizar
      filtros: ["blur", "mono", "sepia", "negative", "paint", "pixel"],
       // Propiedad colores contiene un array con los colores para aplicar en la fuente
      colores: ["red", "green", "yellow", "blue", "black", "gray"],
       // Propiedad filtroSclt, contiene un string llamado Selecciona, para que aparezca este nombre en el select de Filtros
      filtroSclt: "Selecciona",
       // Propiedad colorSclt, contiene un string llamado Selecciona, para que aparezca este nombre en el select de Color de fuente
      colorSclt: "Selecciona",
       // Propiedad tamano con valor null, que tomará el valor indicado de tipo number en el input y aparecerá sobre la imagen
      tamanoLetra: null,
       // Propiedad imagenRes con un string vacío donde se almacenará la imagen generada
      imagenRes: "",
    };
  },
  // Método "gatito" 
  methods: {
    gatito() {
      // La URL de la API gatitos se concatena con cada propiedad que corresponde, y es generada de forma dinámica según la selección del usuario
      this.imagenRes = `https://cataas.com/cat/gif/says/${this.mensaje}?filter=${this.filtroSclt}&color=${this.colorSclt}&size=${this.tamanoLetra}`;
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "cabin", sans-serif;
}
.contenido {
  max-width: 500px;
  margin: auto;
}
.titulo {
  text-align: center;
  padding: 40px 0 20px 0;
  background-color: #add8e6;
  color: #394854;
  font-size: 18px;
  font-weight: 700;
}
.altoInput {
  padding: 2px 0;
}
.Filtros {
  padding: 10px;
  background-color: #f08080;
}
.instruccion {
  margin: 20px 0;
  text-align: left;
  padding-left: 45px;
  color: #394854;
  font-size: 16px;
  font-weight: 400;
}
.color {
  display: inline-block;
  align-items: center;
}
.circuloColor {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  display: inline-block;
}
.gif {
  padding: 20px 0 50px 0;
  background-color: #add8e6;
  text-align: center;
}
.btnGato {
  margin-bottom: 20px;
  padding: 5px 10px;
  color: #394854;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  border-color: #f08080;
  cursor: pointer;
}
</style>
