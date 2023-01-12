<template>
    <h2>Componentes con Vue.js</h2>
    <h3 :style="`color: ${array[2]}`">{{name.toUpperCase() }}</h3>
    <h3 v-if="active">Estoy activo</h3>
    <p v-else>Estoy incativo</p>
</template>

<script setup>
  const name = "Aqui va el nombre del usuario"
  const array = ["blue", "red", "green"]
  const active = true
</script>

<style>
h2 {
  color:goldenrod;
  size: 16px;
  text-align: center;
}
</style>