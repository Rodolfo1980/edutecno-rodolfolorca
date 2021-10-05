import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9r4TYtV84dNH51XXzDvJWxBhbAzkj1mA",
  authDomain: "fir-example-1d348.firebaseapp.com",
  projectId: "fir-example-1d348",
  storageBucket: "fir-example-1d348.appspot.com",
  messagingSenderId: "856675564072",
  appId: "1:856675564072:web:6371b7cfa199d7a1b4131d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// CREDENCIALES
// Correo electrónico: ejemplocorreo@correo.com
// Contraseña: 123321

Vue.config.productionTip = false

new Vue({
  app,
  router,
  render: h => h(App)
}).$mount('#app')


const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  sessionStorage.setItem('user', JSON.stringify(user));
});


