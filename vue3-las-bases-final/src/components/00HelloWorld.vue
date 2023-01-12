<template>
  <h2>Hola Mundo</h2>
  <p>{{ message }}</p>
  <label for="message">Mensaje</label><br />
  <input id="message" v-model="message" />
</template>

<script>
import { ref } from "vue"
export default {
  name: "HelloWorld",
  setup() {
    const message = ref("HelloWorld")
    return { message }
  }
}
</script>
