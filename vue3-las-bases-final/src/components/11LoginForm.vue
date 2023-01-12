<template>
  <h2>Login Form</h2>
  <label for="email">Email</label>
  <input
      autocomplete="off"
      id="email"
      :value="email"
      type="email"
      name="email"
      @input="$emit('update:email', $event.target.value)"
  />
  <label for="password">Password</label>
  <input
      id="password"
      :value="password"
      type="password"
      name="password"
      @input="$emit('update:password', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    email: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: ''
    }
  }
}
</script>
