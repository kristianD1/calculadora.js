<template>
  <h2>Profile with Props</h2>
  <h3>Nombre: {{ name }}, Edad: {{ age }}</h3>
</template>

<script>
export default {
  name: "ProfileWithProps",
  props: {
      name: String,
      age: Number,
  },
  setup(props) {
    console.log(props.name)
    console.log(props.age)
  }
}
</script>
