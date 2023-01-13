<template>
  <nav>
    <div class="nav-wrapper">
      <ul class="right hide-on-med-and-down">
        <li><router-link :to="{name:login}">login</router-link></li>
        <li><router-link to="/Usuarios">Usuarios</router-link></li>
      
      </ul>
    </div>
  </nav>

<div class="container">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
}
</script>