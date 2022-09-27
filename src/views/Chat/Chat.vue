<template>
    <div class="container">
        <Header />
        <chatBox/>
        <Keyboard/>
    </div>
</template>



<script>
import ChatBox from '@/components/chatBox.vue';
import Header from "@/components/Header.vue";
import Keyboard from "@/components/Keyboard.vue";


    export default{
    name: "Chat",
    props: [],
    components: { Header, ChatBox, Keyboard}
}
</script>

<style scoped>
    @import "./Chat.css"
</style>