<template>
    <div class="container">

        <div class="top-box">
            <p class="return-box"><i class="fa-solid fa-chevron-left fa-1x"></i></p>
            <p> <strong> {{ name }} </strong>  <br/> {{ car }}</p>
            <p class="img-box"></p>
        </div>

        <div class="chat-box">
            <h1><i class="fa-solid fa-comments fa-5x"></i></h1>
            <h3>No messages yet</h3>
        </div>

       <Keyboard/>
        
    </div>
</template>

<script>
import Keyboard from '@/components/Keyboard.vue';
    export default {
    name: "EmptyChat",

    setup(){
        return { };
    },
    components: { Keyboard },
    props: ['name', 'car']
}
</script>

<style>
 @import "./EmptyChat.css"
</style>