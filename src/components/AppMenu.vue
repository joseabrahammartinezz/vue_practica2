<template>
    <nav class="navbar navbar-expand-lg " :style="`background: ${menuColor}`">
        <div class="container-fluid"> 
            
            <a class="navbar-brand" href="#">
               
                    <h1>{{marca}}</h1>
                
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">                   
                    <li class="nav-item" >
                       <a class="nav-link" aria-current="page" href="#">{{menus[0].etiqueta}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">{{menus[1].etiqueta}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'AppMenu',
        data(){
            return {                 
                marca: "MegaDron",
                menuColor: "lightblue",
                menus:[
                        {
                        etiqueta: "Inicio",
                        url: "?"
                        },
                        {
                        etiqueta: "Tienda",
                        url: "?"
                        }
                        ]
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