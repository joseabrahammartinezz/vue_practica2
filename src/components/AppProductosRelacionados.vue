<template>
 
<div class="container ">

    <div class="row">
        <h4>Productos relacionados</h4>
    </div>
    <div class="row">
        <div class="col" v-for="(relacionados) of productosRelacionados">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{relacionados.nombre}}</h5>
                    <img :src="`${relacionados.imagen}`"
                        style="max-width: 100%;">
                    <p class="card-text">{{relacionados.descripcion}}</p>
                        <div class="producto-relacionado-precio">Precio: {{relacionados.precio}} BOB</div>
                    <div>
            <div>
                <div class="color-box clic" v-for="(value) of relacionados.colores" :style="`background: ${value}`"></div>
            </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>

    export default {
        name: 'AppProductosRelacionados',
        data(){
            return {               
                precioEstilos: "background: orangered; color: white; font-weight: bold",
                productosRelacionados: [],
                pedido: {
                            id:null,
                            cantidad: 1,
                            color:null
                        }
            }
        },
        methods: {
            getProductos() {
            axios({
                method: "get",
                url:  "http://localhost:3333/productos"
            })
                .then(response => {
                    this.productosRelacionados = response.data;
                    console.log(response);
                })
                .catch(e => console.log(e));
        },
        
           
        },
        computed: {
        },
        mounted(){
            this.getProductos()
        },
        components: {
        }
    }
</script>

<style>
 
</style>