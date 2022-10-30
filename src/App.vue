<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About'}">About</router-link> |
    <router-link :to="{ name: 'Jobs'}">Jobs</router-link> 

  </div>

<button @click="backwars">Go Back</button>
<button @click="redirect">Redirect</button>
<button @click="forward">Go Forward</button>

  <router-view/>
</template>

<script>
export default{
  methods:{
    backwars(){
      this.$router.go(-1)
    },
    redirect(){
      this.$router.push({name : 'Home'})
    },
    forward(){
      this.$router.go(1)
},
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: rgb(151, 141, 141);
  background: #4d6780;
}
button{
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
