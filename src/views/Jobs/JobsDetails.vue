<template>
  <div v-if="job">
    <h1>{{job.title}} </h1>
    <p>route id is {{id}} </p>
    <p>{{job.details}} </p>
  </div>
  <div v-else> Job Details Loading.... </div>
  </template>
  
  <script>
import { def } from '@vue/shared'

  
  
  export default {
      props: ['id'] ,
      data(){
        return {
          job: null
        }
      },
      mounted(){
      fetch('http://localhost:3000/jobs/' + this.id )
      .then(res => res.json() )
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
   }
    }
  
  </script>
  
  <style>

  </style>