<template>
    <div class="row">
        <div class="col m12 card-panel">
            <form @submit.prevent="iniciar">
                <div class="row">
                    <div class="col m3">
                        <label>Usuario</label>
                        <input type="text" v-model="usuario">
                    </div>
                    <div class="row">
                        <div class="col m3">
                            <label>contraseña</label>
                            <input type="text" v-model="clave">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col m3">

                            <button type="submit" id="iniciar"><i
                                    class="material-icons right">security</i>Ingresar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            usuario: '',
            clave: ''
        }
    }


}
</script>