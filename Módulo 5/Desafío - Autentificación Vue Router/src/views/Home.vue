<template>
  <div class="text-center mt-5">
    <h1><b>Home</b></h1>
    <img alt="Con acceso" src="../assets/candado_abierto.png" />
    <h2>Creación de autentificación con Vue Router</h2>
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
