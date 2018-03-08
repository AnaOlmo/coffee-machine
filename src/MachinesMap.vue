<template>
    <div>
        <h1>{{ msg}}</h1>
        <gmap-map
                :center="{lat:48, lng:2}"
                :zoom="7"
                class="google-map"
        >
        </gmap-map>
    </div>
</template>


<script>


   export default {
        name: 'Map',
        data() {
            return {
                msg: 'Machines Map'
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
