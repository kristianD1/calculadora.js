<template>
  <h2>Root Events</h2>
  <label for="rootMessage">Mensaje</label>
  <input id="rootMessage" v-model="message" />
  <button @click="notifyToRoot">Notificar al componente root</button>
</template>

<script>
import { ref, inject } from "vue";
export default {
  name: "RootEvents",
  emits: ["onRootFire"],
  setup () {
    const message = ref("")
    const emitter = inject("emitter")

    const notifyToRoot = () => {
      emitter.emit("onRootFire", message.value)
    }

    return { message, notifyToRoot }
  }
}
</script>
