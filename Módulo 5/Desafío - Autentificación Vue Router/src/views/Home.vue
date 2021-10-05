<template>
  <div class="text-center mt-5">
    <h1>Home</h1>
    <img alt="Sin acceso" src="../assets/candado_abierto.png" />
    <h3>Desafío Creación de autentificación con Vue Router</h3>
    <div class="d-flex flex-column">
      <a href="" style="font-size: 40px" @click.prevent="logout"
        ><b>SALIR</b></a
      >
    </div>
    <h6 style="margin-top: 20px">Rodolfo Lorca - Desafío Latam 2021</h6>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          setTimeout(() => {
            this.$router.push("/login");
          }, 1000);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>
