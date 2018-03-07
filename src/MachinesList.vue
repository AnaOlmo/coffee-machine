<template>
   <div>
    <h1>Liste des machines</h1>
     <Machine  v-for="machine in machines"
               :key="machine.id"
               v-bind:name="machine.name"
               v-bind:status="machine.status"
               v-bind:checkedAt="machine.checkedAt.toLocaleString()">


     </Machine>

   </div>
</template>


<script>
    import Machine from './Machine.vue';

    export default {
        components:{Machine},
        name:'List',
        data() {
                return {
                    machines: [
                        {
                            id:1,
                            name: 'What else ?',
                            status: true,
                            checkedAt: new Date(),
                        },
                        {
                            id:2,
                            name: 'Really?',
                            status: false,
                            checkedAt: new Date(),
                        }]
                }
        }
    };

</script>

<style>

</style>