import Vue from 'vue';
import App from './App.vue';
​
new Vue({
el: '#app',
render: h => h(App),
});
module.exports = {
presets: [ '@babel/present-env'],
}