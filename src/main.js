import Vue from 'vue'
import App from './App.vue'
import List from './MachinesList.vue'
import Map from './MachinesMap.vue'
import Machine from './Machine.vue'
import VueRouter from 'vue-router'
//import Router from 'vue-router'
import ToggleButton from 'vue-js-toggle-button'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(ToggleButton);
Vue.use(VueRouter);
//Vue.use(Router);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAZhd4u8n6NlTeeEG6bjabrQlkwTkmrvhY',
        //libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)
    }
});

//composant provenant de fichiers//
Vue.component('Liste',List);
Vue.component('Carte',Map);
Vue.component('Machine',Machine);

//composant simple//
/*Vue.component('MachinesList', {
template:'<h1>Liste des machines</h1>',
});
Vue.component('MachinesMap', {
    template:'<h1>Carte des machines</h1>',
});*/


const routes = [
    { path: '/Machines', component: List },
    { path: '/Map', component: Map },
    { path: '/Machine', component: Machine }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

/*const app = new Vue({
    router
}).$mount('#app');*/

new Vue({
  el: '#app',
    router,
  render: h => h(App)
});