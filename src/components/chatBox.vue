<template>
    
    <div class="chat-boxx">
        <div class="text1">
            <p>Hey i'm on my way.</p>
        </div>

        <div class="text2">
            <p>Okay, waiting for you near the supermarket.</p>
        </div>

        <div class="text3">
            <p>Hold on, i will be there in 5 minutes.</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ChatBox",
    }
</script>

<style scoped>

    .chat-boxx{
        padding: 5px;
        margin: 90px auto;
        width: 350px;
        height: 300px;
        font-size: smaller;
        text-align: center;
    }
    
    .text1{
        background-color: #f5f1f1;
        border-radius: 25px;
        width: 200px;
        margin-top: 10px;
        padding: 3px;
    }
    
    .text2{
        border-top-right-radius: 0px;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        padding: 3px;
        width: 300px;
        float: right;
        margin-top: 50px;
        background-color: #1152FD;
        color: white;
    }
    
    .text3{
        background-color: #f5f1f1;
        border-radius: 25px;
        width: 250px;
        margin-top: 150px;
        padding: 3px;
    }
</style>