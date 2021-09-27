<template>
  <v-app>
    <TheNavBar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';
import firebase from 'firebase';
import Swal from 'sweetalert2';

export default {
  name: 'App',
  components: {
    TheNavBar
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('cargandoUsuario',user);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Ingreso con éxito',
            showConfirmButton: false,
            timer: 1500
          });
      } else {
        this.$store.dispatch('cargandoUsuario',null);
      }
    });
    this.$store.dispatch('traerCursosDb');
  },
};
</script>