<template>
    <div>
        <h1>Machine {{Machine.name}}</h1>
       <!-- <h3>Status {{Machine.status}}</h3>-->
        <h3 v-if ="Machine.status":style="{'color':'green'}">Status OK</h3>
        <h3 v-else :style="{'color':'red'}">Status KO</h3>
        <h5>Last time checked : {{Machine.checkedAt}}</h5>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                Machine: {
                    name: 'What else ?',
                    status: false,
                    checkedAt: new Date(),

                }
            }
        }
    }
</script>

<style>

</style>