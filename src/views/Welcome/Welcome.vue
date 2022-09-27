<template>
    <div class="container">

        <div class="circle"></div>

        <h3>Set your Location</h3>

        <div class="content">Enable location sharing so <br/> that your driver can see <br/> where you are.</div>

        <div class="dots">
            <i class="fa fa-circle" aria-hidden="true"></i>
            <i class="fa fa-circle" aria-hidden="true"></i>
            <i class="fa fa-circle-thin fa-2x" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Welcome',

        setup(){
            return{}
        },

    }
</script>

<style scoped>
 @import "./Welcome.css"
</style>