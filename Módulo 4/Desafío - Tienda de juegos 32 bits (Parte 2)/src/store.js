import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    titulo:'Tienda 32 bits',
    subtitulo: 'Juegos para Consolas y PC',
    notfound: 'La página que busca no está disponible',
    juegos:[
      {
        id: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        id: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        id: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color:"green",
        destacado: true,
      },
      {
        id: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        id: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        id: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
    ventas:[],
    totalVentas:[],
    suma:"",
  },
  getters: {
    totalJuegos: state =>{
      return state.juegos.length;
    },
    juegosConStock: state =>{
      return state.juegos.filter((juego)=>{
        return juego.stock > 0
      })
    },
    ventasRealizadas: state=>{
      return state.ventas.length
    },
    sumaStockTotal: state=>{
      return state.juegos.reduce((acc, juego) => acc += parseInt(juego.stock),0)
    },
    sumaVentasTotal: state=>{
      return state.totalVentas.reduce((a,b)=>a+b)
    }
  },
  mutations: {
    venderJuego:(state, juego_id)=>{
      state.juegos.forEach((juego)=>{
        if(juego.id === juego_id){
          juego.stock--
        }
      })
    },
    registrarVenta:(state, juego)=>{
      state.ventas.push({
        id:juego.id,
        nombre:juego.nombre,
        stock:juego.stock,
        precio:juego.precio,
      }),
      state.totalVentas.push(
        parseInt(juego.precio)
      )
    }
  },
  actions: {
    ProcesarVenta({commit,state}, juego_id){
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          let venta_exitosa = false
          state.juegos.forEach(juego=>{
          if(juego.id === juego_id){
            //llamo a la mutacion
            commit('venderJuego', juego_id)
            venta_exitosa= true
          }
        })
        if(venta_exitosa){
          resolve()
        }
        else{
          reject()
        }
        }, 2000);
        
      })
    },
    registrarVenta({commit}, juego){
      return new Promise((resolve)=>{
        setTimeout(() => {
          commit('registrarVenta', juego)
          resolve()
        }, 1000);
      })
    },
    async vender({dispatch},juego){
      try {
        await dispatch('ProcesarVenta', juego.id)
        await dispatch('registrarVenta', juego)
        alert("venta procesada");

      } catch (error) {
        console.log(error);
      }
    }
  }
});

export default store;