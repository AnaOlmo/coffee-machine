<template>
    <div>

        <h1>Machine {{name}}</h1>
        <h3 v-if ="status":style="{'color':'green'}">Status OK</h3>
        <h3 v-else :style="{'color':'red'}">Status KO</h3>
        <h5>Last time checked : {{checkedAt}}</h5>
        <!-- nouveau
        <h1>Machine{{name}}</h1>
        <h3 v-if ="status" class="green">{{MessageOk}}</h3>
        <h3 v-else  class="red">{{MessageKo}}</h3>
        <h5>Last time checked : {{date(checkedAt)}}</h5>-->

    </div>
</template>

<script>
    export default {
        name: 'Machine',
        props: ['name', 'status', 'checkedAt']
        // data() {
        //     return {
        //         Machine: {
        //             name: 'What else ?',
        //             status: true,
        //             checkedAt: new Date(),

               // }
            //}
        //}
    }

</script>

<!--<script>-->

    <!--export default {-->
        <!--name: 'Machine',-->
        <!--props: ['name', 'status', 'checkedAt'],-->
        <!--data() {-->
            <!--return {-->
                <!--MessageOk: 'status OK',-->
                <!--MessageKo: 'Status KO'-->
            <!--}-->
        <!--},-->
            <!--methods: {-->
                <!--dateFormat : function(date){-->
                    <!--return date.toLocaleString();-->
                <!--}-->
            <!--}-->
        <!--};-->

<!--</script>-->

<!--<style>
</style>-->

<style>
    .red {
        color:red;
    }
    .green {
        color: green;
    }
</style>


