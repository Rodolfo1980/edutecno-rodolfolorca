import Vue from 'vue'
import Router from 'vue-router'
import Articulo from './components/Articulo'
import Contacto from './components/Contacto'
import Inicio from './components/Inicio'
import NotFound from './components/NotFound'
import Post from './components/Post'
import SobreMi from './components/SobreMi'

Vue.use(Router)

export default new Router({
    mode: 'history',
        routes: [
            {
                path: "/",
                name: "Inicio",
                component: Inicio
            },
            {
                path: "/sobremi",
                name: "SobreMi",
                component: SobreMi
            },
            {
                path: "/contacto",
                name: "Contacto",
                component: Contacto
            },
            {
                path: "/post",
                name: "Post",
                component: Post,
                children: [
                {
                    path: ":articulo",
                    name: "Articulo",
                    component: Articulo,               
                },
                ]
            },
            {
                path: "*",
                name: "NotFound",
                component: NotFound,
            }            
        ]
})