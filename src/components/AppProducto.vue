<template>
   <div class="container">

    <div class="row">
        <h3>{{producto.nombre}}</h3>
    </div>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-4 ">
            <img :src="`${producto.imagen}`" style="max-width: 100%;">
        </div>
        <div class="col-12 col-sm-6  col-md-8">
            <h6>{{producto.descripcion}}</h6>
            <div class="p-3 mb-2 text-white" :style="`${precioEstilos}`">
            Precio: {{producto.precio}} BOB
            </div>
            <h5>Color</h5>
            <div>
            
                <div class="color-box clic" v-for="(value) of producto.colores" :style="`background: ${value}`" v-on:click="asignarColor(`${value}`)"></div>
            </div>
            <h5>Cantidad</h5>
            <div class="quantity">
                <button v-on:click="decrementar();">-</button> 
                <div>{{pedido.cantidad}}</div> 
                <button v-on:click="pedido.cantidad++">+</button>
            </div>
            <div class="buy-box">
                <button type="button" class="btn btn-primary" v-if="(pedido.color!=null && pedido.cantidad>=1)"  @click="comprar()">Comprar</button>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'AppProducto',
        data(){
            return {                 
                precioEstilos: "background: orangered; color: white; font-weight: bold",
                producto:{
                    "id":1,
                    "imagen": null,
                    "nombre": null,
                    "descripcion": null,
                    "precio": null,
                    "colores": []
                },
                pedido: {
                            id:null,
                            cantidad: 1,
                            color:null
                        }
            }
        },
        methods: {
            asignarColor: function(color){
                    //var arr = this.configuracionPagina.menus.keys(this.configuracionPagina.menus).map(function (key) {return  this.configuracionPagina.menus[key];});
                    this.pedido.color=color;
                    this.pedido.id=1;
                    console.log(this.pedido.color);
                },   
            decrementar: function(){
                //var arr = this.configuracionPagina.menus.keys(this.configuracionPagina.menus).map(function (key) {return  this.configuracionPagina.menus[key];});
                if (this.pedido.cantidad>=1){
                    this.pedido.cantidad--;
                        
                }
                else{
                    this.pedido.cantidad=0;
                }
                console.log (this.pedido.cantidad);
                return this.pedido.cantidad;
            },   
            comprar: function(){
                if (this.pedido.color==null){
                    alert("Debe escoger un color...")
                }
                else{
                    alert(  "Id del producto: " +  this.pedido.id   + "\nLa Cantidad: " + this.pedido.cantidad + "\nColor seleccionado: "+  this.pedido.color );
                }
            },
            getProducto() {
            axios({
                method: "get",
                url:  "http://localhost:3333/productos/1"
            })
                .then(response => {
                    this.producto = response.data;
                    console.log(response);
                })
                .catch(e => console.log(e));
        },

           
        },
        computed: {
        },
        mounted(){
            this.getProducto()
        },
        components: {
        }
    }
</script>

<style>

</style>