<template>
    <div>
        <h1>{{ msg}}</h1>
        <gmap-map
                :center="{lat:48, lng:2}"
                :zoom="7"
                class="google-map"
        >
        <div>

      <gmap-marker
        :key="machines.id"
        v-for="machine in machines"
        :position={lat:machine.latitude,lng:machine.longitude}
        :clickable="true"
        :draggable="true">

      </gmap-marker>
        </div>
        </gmap-map>

    </div>
</template>


<script>


   // export default {
   //      name: 'Map',
   //      data() {
   //          return {
   //              msg: 'Machines Map'
   //          }
   //      }
   //  };
   export default {
     name: 'MachinesMap',
     data() {
       return {
         machines: [{
           id: 1,
           latitude: 25,
           longitude: 55,
         },
           {
             id: 2,
             latitude: 40,
             longitude: -74,
           }]
       }
     }
   };


</script>

<style scoped>
    .google-map {
        width: 800px;
        height: 600px;
      margin: auto;

    }
</style>
