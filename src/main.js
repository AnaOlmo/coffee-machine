import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton);

Vue.component('MachinesList', {
    template:'<h1>Liste des machines</h1>',
});

Vue.component('MachinesMap', {
    template:'<h1>Carte des machines</h1>',
});



new Vue({
  el: '#app',
  render: h => h(App)
});



