<template>
  <v-container>
    <h1 class="my-5 text-center text-h5 text-sm-h2">
      Editando el curso: {{ nombre }}
    </h1>
    <div class="mt-10">
      <v-form ref="form" v-model="valid" lazy-validation>
        <!-- Nombre del curso -->
        <v-text-field
          v-model="nombre"
          :counter="20"
          :rules="nombreRules"
          label="Nombre"
          required
        ></v-text-field>
        <!-- Imagen del curso -->
        <v-text-field
          v-model="imagen"
          label="URL de la Imagen del curso"
          required
          type="url"
        ></v-text-field>
        <!-- Cupos del curso -->
        <v-text-field
          v-model="cupos"
          :rules="cuposRules"
          label="Cupos del curso"
          required
        ></v-text-field>
        <!-- Inscritos en el curso -->
        <v-text-field
          v-model="inscritos"
          :rules="inscritosRules"
          label="Inscritos en el curso"
          required
        ></v-text-field>
        <!-- Duración del curso -->
        <v-text-field
          v-model="duracion"
          label="Duración del curso"
          required
        ></v-text-field>
        <!-- Costo del curso -->
        <v-text-field
          v-model="costo"
          :rules="costoRules"
          label="Costo del curso"
          required
        ></v-text-field>
        <!-- ID del curso -->
        <v-text-field
          v-model="codigo"
          label="Código del curso"
          required
        ></v-text-field>
        <!-- Descripción del curso -->
        <v-textarea
          outlined
          label="Descripción del curso"
          v-model="descripcion"
        >
        </v-textarea>
        <!-- Fecha de registro del curso -->
        <v-text-field
          v-model="fecharegistro"
          label="Fecha de Registro"
          required
          type="date"
        ></v-text-field>
        <!-- Estado del curso -->
        <v-switch
          v-model="estado"
          :label="estado ? 'Terminado: Si' : 'Terminado: No'"
          color="indigo"
          :true-value="estado"
          hide-details
        ></v-switch>

        <v-container
          class="
            mt-5
            d-flex
            justify-center
            align-content-center
            flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row
          "
        >
          <v-btn
            :disabled="!valid"
            color="success"
            class="mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mx-4"
            @click="validate"
          >
            Actualizar
          </v-btn>

          <v-btn
            color="error"
            class="mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 mx-4"
            @click="reset"
          >
            Limpiar Formulario
          </v-btn>

          <v-btn
            color="warning"
            class="mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 mx-4"
            @click="resetValidation"
          >
            Limpiar Validación
          </v-btn>

          <v-btn
            color="primary"
            class="mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 mx-4"
            @click="$router.go(-1)"
          >
            Regresar
          </v-btn>
        </v-container>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";
import { mapGetters } from "vuex";

export default {
  name: "Editando",
  props: ["id"],
  computed: {
    ...mapGetters(["enviandoCursos"]),
  },
  data() {
    return {
      valid: true,
      nombre: "",
      imagen: "",
      codigo: "",
      inscritos: 0,
      descripcion: "",
      cupos: 0,
      cuposRules: [
        (v) => !!v || "Cupos es requerido",
        (v) =>
          (v && v.length >= 0 && /\d/gim.test(v) && v >= 0) ||
          "Solo deben ser números positivos",
      ],
      inscritosRules: [
        (v) => !!v || "La cantidad de Inscritos es requerida",
        (v) =>
          (v && v.length >= 0 && /\d/gim.test(v) && v >= 0) ||
          "Solo deben ser números positivos",
        (v) =>
          v <= this.cupos ||
          "La cantidad de inscritos no puede pasar la cantidad de cupos disponibles",
      ],
      duracion: "",
      costo: 0,
      costoRules: [
        (v) => !!v || "Costo es requerido",
        (v) =>
          (v && v.length >= 0 && /\d/gim.test(v) && v >= 0) ||
          "Solo deben ser números positivos",
      ],
      nombreRules: [
        (v) => !!v || "Name is required",
        (v) =>
          (v && v.length >= 2) ||
          "El nombre debe ser mayor o igual a dos caracteres",
      ],
      dialog: false,
      fecharegistro: "",
      estado: false,
    };
  },
  watch: {
    estado(nuevo) {
      if (nuevo) {
        this.inscritos = 0;
      }
    },
  },
  mounted() {
    let cursoEncontrado = this.enviandoCursos.find(
      (result) => result.idDoc === this.id
    );
    if (cursoEncontrado !== undefined) {
      this.cupos = parseInt(cursoEncontrado.cupos);
      this.duracion = cursoEncontrado.duracion;
      this.codigo = cursoEncontrado.codigo;
      this.idDoc = cursoEncontrado.idDoc;
      this.imagen = cursoEncontrado.imagen;
      this.descripcion = cursoEncontrado.descripcion;
      this.nombre = cursoEncontrado.nombre;
      this.costo = parseFloat(cursoEncontrado.costo);
      this.estado = cursoEncontrado.estado;
      this.inscritos = parseInt(cursoEncontrado.inscritos);
      let fecha = cursoEncontrado.fecharegistro.toDate();
      fecha = new Intl.DateTimeFormat("cl").format(fecha);
      this.fecharegistro = fecha.split("-").reverse().join("-");
    } else {
      Swal.fire({
        icon: "error",
        title: "Nones...",
        text: "No existe ese curso",
        footer: "Por favor intenta nuevamente",
      });
      setTimeout(() => {
        this.$router.replace({ name: "Administracion" });
      }, 1000);
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        let cursoNuevo = {
          nombre: this.nombre,
          codigo: this.codigo,
          costo: parseFloat(this.costo),
          cupos: parseInt(this.cupos),
          inscritos: parseInt(this.inscritos),
          imagen: this.imagen,
          duracion: this.duracion,
          estado: this.estado,
          fecharegistro: new Date(this.fecharegistro),
          idDoc: this.idDoc,
          descripcion: this.descripcion,
        };
        this.$store.dispatch("actualizandoCurso", cursoNuevo).then(() => {
          Swal.fire("Excelente", "Curso Actualizado exitósamente", "success");
          this.reset();
          setTimeout(() => {
            this.$router.replace({ name: "Administración" });
          }, 1000);
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Nones...",
          text: "Existen errores en los datos ingresados",
          footer: "Por favor intenta nuevamente",
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>