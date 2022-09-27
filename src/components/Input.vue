<template>
    <div class="all-input">
        <div class="each-input">
            <label for="name">NAME</label>
            <br/>
            <input type="text"/>
        </div>
       
    
        <div class="each-input">    
            <label for="name">EMAIL</label>
            <br/>
            <input type="email"/>
        </div>
       
        <div class="each-input">
            <label for="name">PASSWORD</label>
            <br/>
            <input type="password"/>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Input',
        setup(){

        }
    }
</script>

<style>
.all-input{
    width: 300px;
    height: 50%;
    margin: 70px auto;
    text-align: start;
}

.each-input{
    margin-bottom: 10px;
}

label{
    font-size: large;
    font-weight: bold;
}

input{
    background-color: #F7F8F9;
    width: 280px;
    height: 30px;
    border: 1px solid #D5DDE0;
    border-radius: 15px;
    padding: 3px;
    margin-top: 7px;
    font-size: large;
}
</style>