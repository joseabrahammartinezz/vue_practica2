<template>
    <div>
        <h1>Productos</h1>
        {{producto}}
    </div>
</template>

<script>
    export default {
        name: 'ProductoView',
        data(){
            return {
                producto:{
                    id: null,
                    nombre: null,
                    descripcion: null,
                    precio: null,
                    colores:[]
                }
            }
        },
        methods: {
           
        },
        computed: {
        },
        mounted(){
        },
        components: {
        }
    }
</script>

<style>

</style>