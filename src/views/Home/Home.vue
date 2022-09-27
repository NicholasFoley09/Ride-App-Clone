<template>
    <header>
        <div class="container">
            <div class="top">
                <div class="home-content">
                    <i class="fa-regular fa-user fa-4x"></i>
                    <h3>{{name }}</h3>
                    <h4>{{email}}</h4>
                </div>
            </div>

            
          <div class="body">
                <div class="row">
                    <p>RIDE HISTORY</p>
                </div>

                <div class="row">
                     <p>PAYMENT</p>
                </div>

                <div class="box-X">
                   <p>PROMOCODE</p>
                   <p class="promo-count">1</p>
                </div>

                <div class="row">
                   <p>SUPPORT</p>
                </div>
            </div>

            <div class="bottom">
                <p><a href="#">SIGN OUT</a></p>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            name: String,
            email: String
        }
    }
</script>

<style scoped>
@import "./Home.css";
</style>

