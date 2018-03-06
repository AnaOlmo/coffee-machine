<template>
  <div id="app">
    <img src="coffe_mug.jpg">
    <h1>{{ msg }}</h1>
      <div id="click">
      <h2>Que voulez-vous faire?</h2>

        <button  v-on:click="onMachinesListClick">Consulter la liste des machines</button>
        <button  v-on:click="onMapClick">Voir la carte</button>

      </div>
      <ul>

          <MachinesList>

          </MachinesList>

          <MachinesMap>

          </MachinesMap>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to First Coffee Machine'
    }
  },
    methods: {
        onMachinesListClick: function () {
            window.alert('liste machines');

        },
        onMapClick: function () {
            window.alert('liste map');
    }
},
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
    background-color: #947b6c;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 200px;
    cursor: pointer;

}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
