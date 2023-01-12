<template>
  <login-form
    v-model:email="email"
    v-model:password="password"
  />
  {{ email }} - {{ password }}
  <hr />
  <root-events />
  <hr />
  <emit-events @onFire="eventEmittedFromChild" />
  <hr />
  <profile-with-props name="Cursosdesarrolloweb" :age="39" />
  <hr />
  <Suspense>
    <template #default>
      <suspense-fetch />
    </template>
    <template #fallback>
      cargando información de la API, un momento por favor...
    </template>
  </Suspense>
  <hr />
  <simple-fetch />
  <hr />
  <todo-list />
  <hr />
  <simple-counter-composition-api />
  <hr />
  <watch-counter />
  <hr />
  <reactive-counter />
  <hr />
  <simple-counter />
  <hr />
  <hello-world />
</template>

<script>
import { reactive, toRefs } from "vue"
import HelloWorld from "@/components/00HelloWorld"
import SimpleCounter from "@/components/01SimpleCounter";
import ReactiveCounter from "@/components/02ReactiveCounter";
import WatchCounter from "@/components/03WatchCounter";
import SimpleCounterCompositionApi from "@/components/04SimpleCounterCompositionApi";
import TodoList from "@/components/05TodoList";
import SimpleFetch from "@/components/06SimpleFetch";
import SuspenseFetch from "@/components/07SuspenseFetch";
import ProfileWithProps from "@/components/08ProfileWithProps";
import EmitEvents from "@/components/09EmitEvents";
import RootEvents from "@/components/10RootEvents";
import LoginForm from "@/components/11LoginForm";
export default {
  name: 'Home',
  components: {
    LoginForm,
    RootEvents,
    EmitEvents,
    ProfileWithProps,
    SuspenseFetch,
    SimpleFetch,
    TodoList,
    SimpleCounterCompositionApi,
    WatchCounter,
    ReactiveCounter,
    SimpleCounter,
    HelloWorld,
  },
  setup() {
    const eventEmittedFromChild = (message) => {
        console.log(message)
    }

    const login = reactive({
      email: "test",
      password: "password",
    })

    return { ...toRefs(login), eventEmittedFromChild }
  }
}
</script>
