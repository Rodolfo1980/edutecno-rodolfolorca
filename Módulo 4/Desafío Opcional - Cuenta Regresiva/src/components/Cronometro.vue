<template>
    <div>
        <h1><u> Desafío Opcional - Cuenta Regresiva </u></h1>
        <img alt="Vue logo" src="../assets/cronodigital.png">
        <h3> "Rodolfo Lorca - The Final Countdown" </h3>
        <h1>{{cronometro(crono)}}</h1>
        <button class="boton" v-for="cuentas in boton" :key="cuentas" @click="cuentaRegresiva(cuentas.tiempo)">{{cuentas.name}}</button>
    </div>
</template>
<script>
export default {
    name: 'Cronometro',
    data() {
        return {
            crono: 0,
            boton: [
                {name: '3s', tiempo: 3},
                {name: '10s', tiempo: 10},
                {name: '30s', tiempo: 30},
                {name: '1m', tiempo: 60},
                {name: '5m', tiempo: 300},
                {name: '10m', tiempo: 600},
                {name: '15m', tiempo: 900},
                {name: '30m', tiempo: 1800},
                {name: '45m', tiempo: 2700},
                {name: '60m', tiempo: 3600},
            ],
            intervalo: '',
            estado: {activo: false},
        }
    },
    methods: {
        cronometro: function(crono) {
            let segundos = ('0' + Math.floor(crono % 60)).slice(-2);
            let minutos = ('0' + Math.floor(crono / 60 % 60)).slice(-2);
            return `${minutos}:${segundos} Min/Seg`
        },
        cuentaRegresiva: function(cuenta) {
            this.crono = cuenta;
            this.estado.activo = true;
            this.intervalo = setInterval(() => {
                if (this.crono > 0) {
                    this.crono --;
                } else {
                    clearInterval(this.intervalo)
                }
            },2000)
        }
    },
}
</script>
<style>
.boton{
    margin: 10px;
}
</style>