
<template>
    <div class="container">
        <div class="arrive">
            <ExitIcon/>
            <h1 class="arrive-header">Arriving</h1>
        </div>

        <div class="content-box">

            <div class="circles">
                <div class="inner-circle">
                    
                </div>
            </div>

            <div class="user-details">
                <p class="user-name">Patrick</p>
               <div class="car-details">
                 <p class="car-num">HS785K </p>
                <p class="car-name">Volkswagen Golf</p>
               </div>
            </div>

            <div class="user-adress">
                <div class="address1">
                    <p>11:24</p>
                     <!-- <i class="fa-solid fa-circle "></i> -->
                     <i class="fa-solid fa-circle-small"></i>
                    <p>  1, Thrale Street, London, SE19HW, UK</p>
                </div>
                
                <div class="address2">
                    <p>11:38</p>
                    <!-- <i class="fa-solid fa-caret-down"></i> -->
                    <p>Ealing Broadway Shopping Cente, London, W55JY, UK </p>
                   <!-- <p>{{text}}</p> -->
                </div>
            </div>

            <div class="user-card">
                <div class="card-details">
                    <p><i class="fa-brands fa-cc-mastercard fa-2x"></i></p>
                    <p class="card-number">**** 8295 </p>
                </div>
            </div>

            <div class="driver-contact">
                <Button text="Contact Driver" style="height:50px"/>
                <!-- <Cbutton word="Call driver"/> -->
                <p class="quit-btn"><i class="fas fa-times fa-2x"></i></p>
            </div>
        </div>  

        <p><i class="fa-solid fa-circle-small"></i></p>
    </div>
</template>

<script>
// import Cbutton from '@/components/Cbutton.vue'
import Button from '@/components/Button.vue';
import ExitIcon from '@/components/ExitIcon.vue';

    export default{
        name: "Booking",
        props: ["text"],
        components: { Button, ExitIcon}, //Cbutton
        setup(props){
            return{}
         }   
    }
</script>

<style scoped>
    @import "./Booking.css"
</style>