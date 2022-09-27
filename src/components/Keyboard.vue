<template>
    <div class="keyboard">
        <div class="k-options">
            <p class="k-call"><i class="fa-regular fa-circle-camera"></i></p>
            <input class="k-text" type="text" placeholder="Start typing here..."/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Keyboard"
    }
</script>

<style scoped>

    .keyboard{
        border: 1px solid white;
        margin: 210px auto ;
        height: 66px;
        box-shadow: 0px -2px 2px 0px #888888;
    }
    
    .k-options{
        border: 1px solid white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 300px;
        height: 45px;
        margin-top: 10px;
        margin-left: 20px;
    }
    
    .k-call{
       /* border: 1px solid red;*/
        border-radius: 50px;
        width: 115px;
        height: 35px;
        margin-left: -1px;
        box-shadow: 0px 0px 6px 3px #888888;
    }
    
    .k-text{
        margin-left: auto;
        border: 3px solid #f5f1f1;
        border-radius: 25px;
        margin-left: 20px;
        width: 800px;
        height: 22px;
        text-align: start;
        font-size: smaller;
        padding: 3px;
    }

</style>