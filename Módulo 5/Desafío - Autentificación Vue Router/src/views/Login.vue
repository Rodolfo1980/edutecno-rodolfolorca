<template>
  <div>
    <h1><b>Login</b></h1>
    <img alt="Sin acceso" src="../assets/candado_cerrado.png" />
    <h2>Creación de autentificación con Vue Router</h2>
    <div class="card w-25 mx-auto mt-5 shadow-sm">
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Correo electrónico</label
            >
            <input
              type="email"
              class="form-control"
              :class="{ 'is-invalid': mailError }"
              id="mail"
              placeholder="ejemplocorreo@correo.com"
              v-model="mail"
              @input="clearMailError"
            />
            <div
              id="mailError"
              class="form-text text-danger"
              v-if="mailError"
              v-text="mailError"
            ></div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Contraseña</label
            >
            <input
              type="password"
              class="form-control"
              :class="{ 'is-invalid': passwordError }"
              id="password"
              placeholder="123321"
              v-model="password"
              @input="clearPasswordError"
            />
            <div
              id="passwordError"
              class="form-text text-danger"
              v-if="passwordError"
              v-text="passwordError"
            ></div>
          </div>
          <button type="submit" class="btn btn-primary">Ingresar</button>
        </form>
      </div>
    </div>
    <h6 style="margin-top: 20px">Rodolfo Lorca - Desafío Latam 2021</h6>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      mail: "",
      password: "",
      mailError: "",
      passwordError: "",
    };
  },
  methods: {
    login() {
      if (this.mail === "") this.mailError = "Campo obligatorio.";
      if (this.password === "") this.passwordError = "Campo obligatorio.";
      if (this.mail !== "" && this.password !== "") {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.mail, this.password)
          .then(() => {
            this.$router.push("/home");
          })
          .catch((error) => {
            const errorCode = error.code;
            if (errorCode === "auth/user-not-found")
              this.mailError = "Usuario no encontrado.";
            if (errorCode === "auth/wrong-password")
              this.passwordError = "Contraseña incorrecta.";
          });
      }
    },
    clearMailError() {
      this.mailError = "";
    },
    clearPasswordError() {
      this.passwordError = "";
    },
  },
};
</script>

<style>
</style>