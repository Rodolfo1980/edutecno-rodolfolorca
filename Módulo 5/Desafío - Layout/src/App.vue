<template>
  <v-app>
    <v-main>
      <v-toolbar dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Desafío Layout - Rodolfo Lorca</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text> Inicio </v-btn>

          <v-divider vertical></v-divider>

          <v-btn text> Buscar </v-btn>

          <v-divider vertical></v-divider>

          <v-btn text> Acerca de </v-btn>

          <v-divider vertical></v-divider>
        </v-toolbar-items>
      </v-toolbar>

      <v-container fluid>
        <v-row>
          <v-col v-for="(personaje, index) in personajes" :key="index">
            <v-card class="mx-auto" max-width="310" app>
              <v-img :src="personaje.imagen"></v-img>
              <v-card-title> {{ personaje.nombre }} </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
          {{ link }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    personajes: [
      {
        id: 1,
        nombre: 'Morty',
        imagen: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      },
      {
        id: 2,
        nombre: 'Rick',
        imagen: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      {
        id: 3,
        nombre: 'Summer',
        imagen: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      },
      {
        id: 4,
        nombre: 'Beth',
        imagen: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      },
      {
        id: 5,
        nombre: 'Jerry',
        imagen: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      },
    ],
    items: [
      ['mdi-email', 'Inbox'],
      ['mdi-account-supervisor-circle', 'Supervisors'],
      ['mdi-clock-start', 'Clock-in'],
    ],
    /*links: ['Home', 'Acerca de nosotros', 'Servicios', 'Blog', 'Contactanos'],*/
  }),
}
</script>

<style></style>