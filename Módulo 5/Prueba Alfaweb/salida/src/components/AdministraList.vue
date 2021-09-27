<template>
  <v-container>
    <div class="my-6 d-flex justify-center">
      <h2 class="my-2 text-center mx-1 text-h5 text-sm-h2">
        -- Administración --
      </h2>
      <!-- Modal para registrar curso -->
      <section class="my-auto">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="brown darken-2" dark v-bind="attrs" v-on="on"
              >+ Agregar Curso +</v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">+ Agregando Curso +</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <!-- Nombre del curso -->
                  <v-text-field
                    v-model="nombre"
                    :counter="40"
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
                    type="number"
                  ></v-text-field>
                  <!-- Inscritos en el curso -->
                  <v-text-field
                    v-model="inscritos"
                    :rules="inscritosRules"
                    label="Inscritos en el curso"
                    required
                    type="number"
                  ></v-text-field>
                  <!-- Duracion del curso -->
                  <v-text-field
                    v-model="duracion"
                    label="Duración del curso"
                    required
                  ></v-text-field>
                  <!-- Costo del curso -->
                  <v-text-field
                    v-model="costo"
                    :rules="precioRules"
                    label="Costo del curso"
                    required
                    type="number"
                  ></v-text-field>
                  <!-- Código del curso -->
                  <v-text-field
                    v-model="codigo"
                    label="Código del curso"
                    required
                  ></v-text-field>
                  <!-- Descripcion del curso -->
                  <v-textarea
                    outlined
                    label="Descripción del curso"
                    v-model="descripcion"
                  >
                  </v-textarea>

                  <v-container
                    class="
                      mt-5
                      d-flex
                      justify-center
                      align-content-center
                      flex-column
                      flex-sm-column
                      flex-md-row
                      flex-lg-row
                      flex-xl-row
                    "
                  >
                    <v-btn
                      :disabled="!valid"
                      color="light-blue lighten-1"
                      class="mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mx-4"
                      @click="validate"
                    >
                      Agregar
                    </v-btn>

                    <v-btn
                      color="grey lighten-1"
                      class="mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 mx-4"
                      @click="reset"
                    >
                      Limpiar Formulario
                    </v-btn>

                    <v-btn
                      color="cyan darken-1"
                      class="mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 mx-4"
                      @click="resetValidation"
                    >
                      Limpiar Validación
                    </v-btn>
                  </v-container>
                </v-form>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </section>
    </div>
    <!-- Tabla para administrar cursos-->
    <div>
      <v-data-table
        :headers="headers"
        :items="enviandoCursos"
        :items-per-page="5"
        item-key="nombre"
        class="elevation-1"
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus',
        }"
      >
        <template v-slot:[`item.costo`]="{ item }">
          <v-chip color="green" dark>
            {{ item.costo | formatoNum }}
          </v-chip>
        </template>

        <template v-slot:[`item.fecharegistro`]="{ item }">
          <v-chip color="green" dark>
            {{ item.fecharegistro | formatoFecha }}
          </v-chip>
        </template>

        <template v-slot:[`item.estado`]="{ item }">
          <v-chip
            :color="item.estado ? 'blue lighten-1' : 'brown lighten-3'"
            dark
          >
            {{ item.estado ? "Si" : "No" }}
          </v-chip>
        </template>

        <template v-slot:[`item.acciones`]="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                small
                class="mr-3"
                @click="editando(item)"
                v-bind="attrs"
                v-on="on"
              >
                mdi-pencil
              </v-icon>
            </template>
            <span>Editar</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon small @click="eliminando(item)" v-bind="attrs" v-on="on">
                mdi-delete
              </v-icon>
            </template>
            <span>Eliminar</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </div>
    <div class="mt-8">
      <v-alert
        color="purple"
        dense
        elevation="1"
        icon="mdi-account-group"
        outlined
      >
        Cantidad total de alumnos permitidos:
        <strong>{{ enviarTotalAlumnosPermitos }}</strong> alumnos
      </v-alert>
      <v-alert
        color="blue"
        dense
        elevation="1"
        icon="mdi-account-multiple-check"
        outlined
      >
        Cantidad total de alumnos inscritos:
        <strong>{{ enviarTotalAlumnosInscritos }}</strong> alumnos
      </v-alert>
      <v-alert
        color="red"
        dense
        elevation="1"
        icon="mdi-account-clock"
        outlined
      >
        Cantidad total de cupos restantes:
        <strong>{{ cuposRestantes }}</strong> alumnos
      </v-alert>
      <v-alert
        color="pink"
        dense
        elevation="1"
        icon="mdi-block-helper"
        outlined
      >
        Cantidad total de cursos terminados:
        <strong>{{ enviarTotalCursosTerminados }}</strong> cursos.
      </v-alert>
      <v-alert color="brown" dense elevation="1" icon="mdi-bell-ring" outlined>
        Cantidad total de cursos activos:
        <strong>{{ cursosActivos }}</strong> cursos.
      </v-alert>
      <v-alert
        color="deep-orange"
        dense
        elevation="1"
        icon="mdi-bell-ring"
        outlined
      >
        Cantidad total de cursos:
        <strong>{{ cantidadTotalCursos }}</strong> cursos.
      </v-alert>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "AdministraList",
  data() {
    return {
      valid: true,
      nombre: "",
      imagen: "",
      codigo: "",
      cupos: 0,
      inscritos: 0,
      cuposRules: [
        (v) => !!v || "Cupos es requerido",
        (v) =>
          (v && v.length >= 0 && /\d/gim.test(v) && v >= 0) ||
          "Solo deben ser numeros positivos",
      ],
      inscritosRules: [
        (v) => !!v || "La cantidad de Inscritos es requerida",
        (v) =>
          (v && v.length >= 0 && /\d/gim.test(v) && v >= 0) ||
          "Solo deben ser numeros positivos",
        (v) =>
          v <= this.cupos ||
          "La cantidad de inscritos no puede pasar la cantidad de cupos disponibles",
      ],
      duracion: "",
      costo: 0,
      descripcion: "",
      precioRules: [
        (v) => !!v || "Costo es requerido",
        (v) =>
          (v && v.length >= 0 && /\d/gim.test(v) && v >= 0) ||
          "Solo deben ser numeros positivos",
      ],
      nombreRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 2) || "Name must be less than 10 characters",
      ],
      dialog: false,
      headers: [
        {
          text: "Curso",
          align: "start",
          value: "nombre",
        },
        { text: "Cupos", value: "cupos" },
        { text: "Inscritos", value: "inscritos" },
        { text: "Duración", value: "duracion" },
        { text: "Costo", value: "costo" },
        { text: "Terminado", value: "estado" },
        { text: "Fecha", value: "fecharegistro" },
        { text: "Acciones", value: "acciones" },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "enviandoCursos",
      "enviarTotalAlumnosPermitos",
      "enviarTotalAlumnosInscritos",
      "enviarTotalCursosTerminados",
    ]),
    cuposRestantes() {
      return this.enviarTotalAlumnosPermitos - this.enviarTotalAlumnosInscritos;
    },
    cursosActivos() {
      return this.enviandoCursos.length - this.enviarTotalCursosTerminados;
    },
    cantidadTotalCursos() {
      return this.enviandoCursos.length;
    },
  },
  filters: {
    formatoNum(valor) {
      return new Intl.NumberFormat("cl", {
        style: "currency",
        currency: "CLP",
      }).format(valor);
    },
    formatoFecha(valor) {
      let fecha = new Intl.DateTimeFormat("cl").format(valor.toDate());
      return fecha; // toDate() metodo propio de firebase para trasnformar la base de datos con fechas
    },
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
          imagen: this.imagen,
          inscritos: parseInt(this.inscritos),
          duracion: this.duracion,
          estado: false,
          descripcion: this.descripcion,
          fecharegistro: new Date(),
        };
        Swal.fire({
          title: "¿Seguro que deseas agregar el curso?",
          text: "",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: '<span style="color: white">Cancelar</span>',
          confirmButtonText: "Si, agregar curso!",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch("agregandoCurso", cursoNuevo).then(() => {
              Swal.fire("Muy Bien", "Curso agregado con éxito", "success");
              this.reset();
              this.dialog = false;
            });
          } else {
            this.reset();
            this.dialog = false;
          }
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
    eliminando(item) {
      Swal.fire({
        title:
          '<span class="font-weight-regular">¿Seguro que deseas eliminar el curso?</span>',
        text: "No se puede volver a recuperar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2196F3",
        cancelButtonColor: "#F44336",
        cancelButtonText:
          '<span style="color: white"><strong>Cancelar</strong></span>',
        confirmButtonText:
          '<span style="color: white"><strong>Si, borrar!</strong></span>',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch("eliminandoCurso", item.idDoc).then(() => {
            Swal.fire("Eliminado", "El curso fue eliminado", "success");
          });
        }
      });
    },
    editando(item) {
      this.$router.push({ name: "Editando", params: { id: item.idDoc } });
    },
  },
};
</script>

<style lang="scss">
</style>