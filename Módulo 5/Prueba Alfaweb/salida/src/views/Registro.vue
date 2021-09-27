<template>
  <v-container>
    <h1 class="mt-10">-- Registro de Nuevo Usuario --</h1>
    <div>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :counter="20"
          :rules="passwordRules"
          label="Password"
          required
          type="password"
        ></v-text-field>

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
            color="light-blue lighten-1"
            class="mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mx-4"
            @click="validate"
          >
            Registrar
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
    </div>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      valid: true,
      password: "",
      passwordRules: [
        (v) => !!v || "La contraseña es requerida",
        (v) =>
          (v && v.length >= 6) ||
          "La contraseña debe ser mayor o igual que 6 caracteres",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "El correo Electrónico es requerido",
        (v) => /.+@.+\..+/.test(v) || "El correo Electrónico debe ser válido",
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            setTimeout(() => {
              this.$router.replace({ name: "Home" }).catch(() => {});
            }, 500);
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Nones...",
              text: "Debes ingresar los datos requeridos!",
              footer: "Por favor intenta nuevamente",
            });
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Nones...",
          text: "Debes ingresar los datos requeridos!",
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