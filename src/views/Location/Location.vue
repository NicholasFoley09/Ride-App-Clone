<template>
  <div class="container">
      <div class="top-tier">
          <p class="icon-1"><i class="fa-solid fa-chevron-left fa-2x"></i></p>
          <p class="big-location"><i class="fa-solid fa-car-on fa-6x"></i></p>
          <p class="icon-2"><i class="fa-solid fa-location-crosshairs fa-2x"></i></p>
      </div>
    

      <div class="bottom-tier">
          <h3 class="text">Destination Location</h3>
          <div class="flex">
            <p class="loc-icon"><i class="fa-solid fa-location-dot fa-2x"></i></p>
            <p style="text-align:start">No 64, Kings Cross Underground <br/> Station, KZF67T, New York</p>
          </div>

          <div class="des-btn">
             <Button text="Set destinstion location" style="width:300px"/>
          </div> 

         
      </div>
  </div>
</template>

<script>
import Button from "../../components/Button.vue";

  export default {
    name: "Location",
    components: { Button }

}
</script>

<style scoped>
  @import "./Location.css"
</style>

