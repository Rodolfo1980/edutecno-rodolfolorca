import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [],
    user: null
  },
  getters: {
    enviandoCursos(state){
      return state.cursos;
    },
    enviandoUser(state){
      return state.user;
    },
    enviarTotalAlumnosPermitos(state,getters){
      return getters.enviandoCursos.map(state=>state.cupos).reduce((total,suma) => total+suma,0);
    },
    enviarTotalAlumnosInscritos(state,getters){
      return getters.enviandoCursos.map(state =>state.inscritos).reduce((total,suma)=>total+suma,0);
    },
    enviarTotalCursosTerminados(state,getters){
      let count = 0;
      getters.enviandoCursos.filter(state => {
        if(state.estado){
          count++;
        }
      });
      return count;
    }
  },
  mutations: {
    mutandoCursos(state,cursosLocal){
      state.cursos = cursosLocal;
    },
    mutandoUserLocal(state,userData){
      state.user = userData;
    }
  },
  actions: {
    traerCursosDb({commit}){
      firebase.firestore().collection('cursos').onSnapshot(result =>{
        let cursosLocal = [];
        result.forEach(element => {
          cursosLocal.push({
            cupos: element.data().cupos,
            duracion: element.data().duracion,
            imagen: element.data().imagen,
            nombre: element.data().nombre,
            costo: element.data().costo,
            fecharegistro: element.data().fecharegistro,
            estado: element.data().estado,
            codigo: element.data().codigo,
            descripcion: element.data().descripcion,
            inscritos: element.data().inscritos,
            idDoc: element.id,
          })
        });
        commit('mutandoCursos',cursosLocal);
      })
    },
    cargandoUsuario({commit},userData){
      commit('mutandoUserLocal',userData);
    },
    agregandoCurso(context,cursoNuevo){
      return firebase.firestore().collection('cursos').add({...cursoNuevo});
    },
    eliminandoCurso(context,idDoc){
      return firebase.firestore().collection('cursos').doc(idDoc).delete();
    },
    actualizandoCurso(context,cursoActual){
      return firebase.firestore().collection('cursos').doc(cursoActual.idDoc).update({...cursoActual});
    }
  }
})
