<template>
    <div>
        <h1>Producto</h1>
        Editar Producto: {{$route.params.id}}
        
    </div>
</template>

<script>
    export default {
        name: 'verProductoView',
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