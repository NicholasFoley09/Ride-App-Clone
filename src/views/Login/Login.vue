<template>
  <div class='container'>
      <div class="user">
         <i class="fa-regular fa-user fa-4x"></i>
          <h3>{{name }}</h3>
          <h4>{{email}}</h4>
      </div>

      <div class="details-A">
        <div class="box">
           <div class="icon"><i style="color:white" class="fa-solid fa-location-crosshairs fa-2x"></i></div> 
            <p>Ride history</p>
        </div>

        <div class="box-1">
         <div class="icon"><i style="color:white" class="fa-solid fa-credit-card fa-2x"></i></div>
            <p>Payment</p>
        </div>
      </div>

      <div class="details-B">
        <div class="box-2">
            <div class="icon"><i style="color:white" class="fa-solid fa-tag fa-2x"></i></div>
            <p>Promocode</p>
        </div>

        <div class="box-3">
            <div class="icon" ><i style="color:white" class="fa-solid fa-headset fa-2x"></i></div>  
            <p>Support</p>
        </div>
      </div>

      <div class="exit">
          <div class="exit-icon"><i class="fas fa-times fa-2x"></i></div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    props: ['name', 'email']
  }
</script>

<style scope>
  @import "./Login.css"
</style>